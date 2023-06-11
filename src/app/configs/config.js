import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const URL = process.env.URL;


// assert(PORT, "PORT is required");
// assert(MONGODB_URI, "MONGODB_URI is required");
//
const config = {
    port: PORT,
    mongo: MONGODB_URI,
    url: URL
}

export default config;
// export default {
//     port: PORT,
//     mongo: MONGODB_URI,
//     url: URL
// }

