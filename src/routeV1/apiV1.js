import express from "express"


//create modular, mountable route handlers
const routerAPI = express.Router();


const apiV1 = (app) => {
    routerAPI.get("/", (req, res) => {
        // res.json({
        //     name: "hung",
        //     function: "test"
        // })
        res.send('Hello World!')
        console.log(">>> check action")
    })

    return app.use("/v1/api", routerAPI)
}

export default apiV1