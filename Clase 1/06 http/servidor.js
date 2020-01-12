const http = require("http");
const inicio = require("./inicio_html");
console.log(inicio.noveo);

let servidor = http.createServer((request, response) => {
    console.log(request.url);
    switch (request.url) {
        case "/":
            response.writeHead(200, { "content-type": "text/html" });
            response.end(inicio.codigohtml);
            break;
        case "/usuarios":
            response.writeHead(200, { "content-type": "text/html" });
            response.end("Hola <b>Usuarios</b>");
            break;
    }

});

servidor.listen(3000);