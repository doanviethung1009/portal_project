//import lib to create app
import express from 'express'
// import cors from 'cors';

//help to get parameter in file .env
import 'dotenv/config'
import apiV1 from './routeV1/apiV1.js';
import exampleAPI from './routeV1/exampleAPI.js';
import { viewEngine } from './config/viewEngine.js';
import bodyParser from 'body-parser';
// import { client, pool } from './config/dbPostGresSQLConfig.js';




const app = express();
app.use(express.json());
// app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//     res.send('hello world')
// })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//modular route to call api
apiV1(app)
exampleAPI(app)
//call function active view EJS
viewEngine(app)

// // const resDb = await client.connect()
// const poolDb = await pool.connect()

// console.log(await pool.query('SELECT NOW()'))
// // const result = await client.query('SELECT NOW()')
// poolDb.on('error', (err) => {
//     console.error('something bad has happened!', err.stack)
// })
// // console.log("> check database ", result)


const hostname = process.env.BE_HOSTNAME || "0.0.0.0"
const port = process.env.BE_PORT || 3000;

// start apps
app.listen(port, () => {
    console.log(`App is listening on host: ${hostname}, port ${port}`)
})

