import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
dotenv.config();

// SERVER
const PORT = process.env.PORT; // .env file create PORT is secure port number

app.listen(PORT, () => {
  // create the runing server port
  console.log(`Server is runing on the port ${PORT}`);
  dbConnection();
});
