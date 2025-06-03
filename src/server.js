//import lib to create app
import express from 'express'
// import cors from 'cors';

//help to get parameter in file .env
import 'dotenv/config'
import apiV1 from './routeV1/apiV1.js';




const app = express();
app.use(express.json());
// app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//     res.send('hello world')
// })

//modular route to call api
apiV1(app)


const hostname = process.env.BE_HOSTNAME || "127.0.0.1"
const port = process.env.BE_PORT || 3000;

// start apps
app.listen(port, () => {
    console.log(`App is listening on host: ${hostname}, port ${port}`)
})

