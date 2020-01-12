const http = require("http");
const contenido = require("./contenido");

let servidor = http.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case "/":
            response.writeHead(200, { "content-type": "text/html" });
            response.end(contenido.html);
            break;
        case "/codigo.js":
            response.writeHead(200, { "content-type": "text/javascript" });
            response.end(contenido.javascript);
            break;
    }

});

servidor.listen(3000);