const express = require("express");

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

console.log("PORT:", port);

app.get('/test', (req, res) => {
    res.send("our api is working");
});

app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`on host: ${host}`);
});