module.exports.port = process.env.PORT || 3001;
module.exports.host = process.env.HOST || "http://realworld-docker.com";
module.exports.db = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/rwd_app";
module.exports.auth_api_url = process.env.AUTH_API_URL || "http://localhost:3002/api"