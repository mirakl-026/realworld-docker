const express = require("express");
const app = express();
const { host, port, db, api_url } = require("./settings");
const axios = require("axios").default;

app.get('/test', (req, res) => {
    res.send("our auth is working!!");
});

app.get("/api/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "bar@gmail.com"
    });
});

app.get("/api/testApiData", async (req, res) => {
    const respApi = await axios.get(api_url + "/someApiData");
    const result = respApi.data;
    if (result) {
        res.json({
            testApiData: true,
            result
        })
    } else {
        res.json({
            testApiData: false
        })
    }
})


async function startServer () {

    app.listen(port, async () => {
        console.log(`- started auth service on port: ${port}`);
        console.log(`- on host: ${host}`);
        console.log(`- db: ${db}`);
    });
}


startServer();