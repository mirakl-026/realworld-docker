const express = require("express");
const app = express();
const { host, port, db, api_url } = require("./settings");
const axios = require("axios").default;

// auth/api/test
app.get('/test', (req, res) => {
    res.send("our auth is working!!");
});

// auth/api/currentUser
app.get("/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "bar@gmail.com"
    });
});

// auth/api/testApiData
app.get("/testApiData", async (req, res) => {
    console.log(api_url + "/someApiData");
    const respApi = await axios.get(api_url + "/someApiData");
    const result = respApi.data;
    //const result = {};
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