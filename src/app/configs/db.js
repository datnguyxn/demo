import mongoose from "mongoose";
import winston from "winston";


function initDatabase() {
    mongoose.connect('mongodb://localhost:27017/blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => {
        winston.info("Connected to MongoDB");
    })
}

export default initDatabase;