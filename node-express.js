const express = require('express');

const server = express({
  logger: true,
});

server.get('/', (_req, res) => {
  res.json({ message: 'Welcome to our node api' });
});

server.get('/json', (_req, res) => {
  res.json({ message: 'This is JSON response' });
});

server.get('/html', (_req, res) => {
  res.send(`
        <html>
            <head>
                <title>My First Node App</title>
            </head>
            <body>
                <h1>This is a HTML response!!!</h1>
            </body>
        </html>
    `);
});

server.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

server.listen(4444, () => {
  console.log('Server is running on port 4444');
});
