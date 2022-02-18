const express = require("express");
const app = express();
const {connectDb} = require("./helpers/db");
const { host, port, db } = require("./settings")

console.log("PORT:", port);

app.get('/test', (req, res) => {
    res.send("our api is working");
});


const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port ${port}`);
        console.log(`on host: ${host}`);
        console.log(`db: ${db}`);
    });
}

connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .once("open", startServer);