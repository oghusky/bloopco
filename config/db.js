const mongoose = require("mongoose"),
    connectDB = async () => {
        const conn = await mongoose.connect(process.env.MONGOURI || "mongodb://localhost:27017/bloopco", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (conn) console.log("Connected to DB");
        else console.log("Not connected to DB");
    };

module.exports = connectDB;
