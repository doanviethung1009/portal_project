//import lib to create app
import express from 'express'
// import cors from 'cors';

//help to get parameter in file .env
import 'dotenv/config'


const app = express();
app.use(express.json());
// app.use(cors());


const hostname = process.env.BE_HOSTNAME || "127.0.0.1"
const port = process.env.BE_PORT || 3000;



console.log(">>> check hostname", hostname, port)
