const express = require('express');

let app = express();
let port = process.env.PORT || 3000;

app.get("/", (Request, Response) =>{
    var languaje = Request.header("accept-language").split(",");
    var someinfo = {
        ip: Request.get("x-forwarded-for"),
        languaje: languaje[0],
        browser: Request.get("user-agent"),
    };
    Response.send(someinfo);
});

app.listen(port, (callback) =>{
    console.log("Huouh someone is listening in port: " + port);
});
