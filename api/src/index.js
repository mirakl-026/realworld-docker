const express = require("express");
const app = express();
const { host, port, db, auth_api_url } = require("./settings");
const  mongoose = require("mongoose");
const axios = require("axios").default;

// модель поста
const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model("Post", postSchema);

// api/test
app.get('/test', (req, res) => {
    res.send("our api is working!!");
});

// api/testWithCurrentUser
app.get("/testWithCurrentUser", async (req, res) => {
    console.log(auth_api_url + '/currentUser');
    const authResp = await axios.get(auth_api_url + '/currentUser');
    const user = authResp.data;
    //const user = {};
    if (user) {
        res.json({
            testWithCurrentUser: true,
            user
        });
    } else {
        res.json({
            testWithCurrentUser: false
        });
    }
});

// api/someApiData
app.get("/someApiData", (req, res) => {
    res.json({
        some_data: "lol kek cheburek"
    })
});


async function startServer () {
    mongoose.connect(db, {
        // useNewUrlParser: true,
        // useFindAndModify: false
    });


    app.listen(port, async () => {
        console.log(`- started api service on port: ${port}`);
        console.log(`- on host: ${host}`);
        console.log(`- db: ${db}`);
    });
}

async function logPost () {
    const somePost = await Post.findOne({});
    if (somePost) {
        console.log(somePost);
    } else {
        const post = new Post({
            name: "something..."
        });
        await post.save();
        console.log("post created...");
    }
}

startServer();
logPost();