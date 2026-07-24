import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage, auth } from "@/lib/firebase";
import { Provider } from "@/types";
import { providersData as initialProviders } from "@/data/providers";

const COLLECTION_NAME = "serviceProviders";

export const getProviders = async (): Promise<Provider[]> => {
  try {
    const colRef = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(colRef);

    if (snapshot.empty) {
      // Return fallback dataset if Firestore collection hasn't been seeded yet
      return initialProviders.map((p) => ({
        id: String(p.id),
        name: p.name,
        phone: p.phone,
        image: p.image,
        location: p.location || "Addis Ababa",
        available: p.available !== false,
      }));
    }

    const providers: Provider[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      providers.push({
        id: docSnap.id,
        name: data.name || "",
        phone: data.phone || "",
        image: data.image || "",
        location: data.location || "",
        available: data.available !== false,
        createdAt: data.createdAt,
      });
    });

    // Sort in memory by createdAt if available
    providers.sort((a, b) => {
      const timeA = a.createdAt?.seconds || 0;
      const timeB = b.createdAt?.seconds || 0;
      return timeB - timeA;
    });

    return providers;
  } catch (error) {
    console.warn("Firestore fetch fallback notice:", error);
    return initialProviders.map((p) => ({
      id: String(p.id),
      name: p.name,
      phone: p.phone,
      image: p.image,
      location: p.location || "Addis Ababa",
      available: p.available !== false,
    }));
  }
};

export const getProviderById = async (id: string): Promise<Provider | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        name: data.name || "",
        phone: data.phone || "",
        image: data.image || "",
        location: data.location || "",
        available: data.available !== false,
        createdAt: data.createdAt,
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting provider by id:", error);
    return null;
  }
};

export const addProvider = async (
  providerData: Omit<Provider, "id">,
  imageDataUrl?: string | null
): Promise<string> => {
  const finalImageUrl = imageDataUrl || providerData.image || "";

  // 1. Create document in Firestore with image data URL directly
  const colRef = collection(db, COLLECTION_NAME);
  const newDocRef = await addDoc(colRef, {
    ...providerData,
    image: finalImageUrl,
    createdAt: serverTimestamp(),
  });

  // 2. Optionally attempt background storage upload if user is authenticated in Firebase Auth
  if (imageDataUrl && imageDataUrl.startsWith("data:") && auth.currentUser) {
    setTimeout(async () => {
      try {
        const storageRef = ref(storage, `providers/${newDocRef.id}/profile.jpg`);
        const uploadResult = await uploadString(storageRef, imageDataUrl, "data_url");
        const downloadUrl = await getDownloadURL(uploadResult.ref);
        await updateDoc(newDocRef, { image: downloadUrl });
      } catch (storageError) {
        // Safe fallback - Data URL is already persisted in Firestore document
      }
    }, 100);
  }

  return newDocRef.id;
};

export const updateProvider = async (
  id: string,
  providerData: Partial<Provider>,
  imageDataUrl?: string | null
): Promise<void> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const finalImageUrl = imageDataUrl || providerData.image;

  const payload: any = {
    ...providerData,
  };
  if (finalImageUrl) {
    payload.image = finalImageUrl;
  }

  await updateDoc(docRef, payload);

  // Optionally attempt background storage upload if user is authenticated in Firebase Auth
  if (imageDataUrl && imageDataUrl.startsWith("data:") && auth.currentUser) {
    setTimeout(async () => {
      try {
        const storageRef = ref(storage, `providers/${id}/profile.jpg`);
        const uploadResult = await uploadString(storageRef, imageDataUrl, "data_url");
        const downloadUrl = await getDownloadURL(uploadResult.ref);
        await updateDoc(docRef, { image: downloadUrl });
      } catch (storageError) {
        // Safe fallback - Data URL is already persisted in Firestore document
      }
    }, 100);
  }
};

export const deleteProvider = async (id: string, imageUrl?: string): Promise<void> => {
  // Delete document from Firestore
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);

  // Attempt deleting image from Storage if applicable
  if (imageUrl && imageUrl.includes("firebasestorage.googleapis.com")) {
    try {
      const storageRef = ref(storage, `providers/${id}/profile.jpg`);
      await deleteObject(storageRef);
    } catch (storageError) {
      console.warn("Notice deleting storage object:", storageError);
    }
  }
};
