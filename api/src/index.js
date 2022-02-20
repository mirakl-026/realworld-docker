const express = require("express");
const app = express();
const { host, port, db } = require("./settings");
const  mongoose = require("mongoose");

// модель поста
const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model("Post", postSchema);


app.get('/test', (req, res) => {
    res.send("our api is working!!");
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