import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve assets folder
app.use('/assets', express.static(path.join(process.cwd(), 'assets')));

// Serve root level static files (such as index.html, favicon, etc.)
app.use(express.static(path.join(process.cwd(), '.')));

// Support cleaner extensionless URLs for all pages dynamically
app.get('/:page', (req, res, next) => {
  const pageName = req.params.page;
  // Prevent path traversal or serving non-html files
  if (pageName.includes('.') || pageName.includes('/') || pageName.includes('\\')) {
    return next();
  }
  const filePath = path.join(process.cwd(), `${pageName}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      next();
    }
  });
});

// Root index fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

// Fallback 404 handler that redirects back to index.html for smooth preview experience
app.use((req, res) => {
  console.warn(`Route not found: ${req.url}, redirecting to /index.html`);
  res.redirect('/index.html');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`HRM Premium Dashboard Server is listening on http://0.0.0.0:${PORT}`);
});
