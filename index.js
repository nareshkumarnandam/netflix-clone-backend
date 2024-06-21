import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';
import cors from 'cors';

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();

//middlewares

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(cors());

//apis

app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
 console.log(`Server is up and listening at port-${process.env.PORT}`);
})