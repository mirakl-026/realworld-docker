const mongoose = require("mongoose");
const { db } = require("../settings");

module.exports.connectDb = () => {
    mongoose.connect(db, {
        //useNewUrlParse: true
    });

    return mongoose.connection;
}