require('dotenv').config();
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Ensure default environment is set to production when deploying
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || '0.0.0.0';

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error('Error occurred handling request:', req.url, err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    })
        .once('error', (err) => {
            console.error('Server startup error:', err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Next.js App ready and listening on http://${hostname}:${port} (NODE_ENV=${process.env.NODE_ENV})`);
        });
}).catch((err) => {
    console.error('Failed to prepare Next.js application:', err);
    process.exit(1);
});
