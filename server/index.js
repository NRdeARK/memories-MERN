import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECT_URL = "mongodb+srv://nataphan:uCneM6ziH7wmgFLx@cluster0.apn6glt.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URL).then(() => app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))

//mongoose.set('useFindAndModify', false);
// nataphan
// uCneM6ziH7wmgFLx