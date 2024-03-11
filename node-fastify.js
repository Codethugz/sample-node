const fastify = require('fastify');

const server = fastify({
  logger: true,
});

server.get('/', (_req, res) => {
  res.send({ message: 'Welcome to our node api' });
});

server.get('/json', (_req, res) => {
  res.send({ message: 'This is JSON response' });
});

server.get('/html', (_req, res) => {
  res.type('text/html');
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

server.listen({ port: 4444 }, () => {
  console.log('Server is running on port 4444');
});
