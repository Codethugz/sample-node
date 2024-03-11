const http = require('http');

const server = http.createServer();

const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`${method}: ${url}`);

  switch (url) {
    case '/':
      return renderJSON(req, res, 'Welcome to our node api');

    case '/html':
      return renderHTML(req, res);

    case '/json':
      return renderJSON(req, res, 'This is JSON response');
    default:
      return renderError(req, res);
  }
};

server.on('request', handleRequest);

server.listen(4444, () => {
  console.log('Server is running on port 4444');
});

const renderHTML = (req, res) => {
  const html = `
        <html>
            <head>
                <title>My First Node App</title>
            </head>
            <body>
                <h1>This is a HTML response</h1>
            </body>
        </html>
    `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
};

const renderJSON = (req, res, message = 'Hello World!') => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message,
    })
  );
};

const renderError = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Not Found' }));
};
