const http = require("http");
const fs = require("fs");

let servidor = http.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case "/":
            response.writeHead(200, { "content-type": "text/html" });
            fs.readFile("estatico/index.html", "utf-8", (err,datos) => {
                response.end(datos);
            });            
            break;
        case "/codigo.js":
            response.writeHead(200, { "content-type": "text/javascript" });
            fs.readFile("estatico/contenido.js", "utf-8", (err,datos) => {
                response.end(datos);
            })
            break;
    }

});

servidor.listen(3000);