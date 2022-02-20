const express = require("express");
const app = express();
const { host, port, db } = require("./settings");

app.get('/test', (req, res) => {
    res.send("our auth is working!!");
});

app.get("/api/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "bar@gmail.com"
    });
});


async function startServer () {

    app.listen(port, async () => {
        console.log(`- started auth service on port: ${port}`);
        console.log(`- on host: ${host}`);
        console.log(`- db: ${db}`);
    });
}


startServer();