module.exports.port = process.env.PORT || 3002;
module.exports.host = process.env.HOST || "http://realworld-docker.com";
module.exports.db = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/rwd_auth";