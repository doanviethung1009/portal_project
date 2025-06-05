import express from "express"
import { fetchUserController } from "../controllers/userController.js";
import { checkAcceptHeader, checkRoleAdmin } from "../middlewares/checkHeaderAccept.js";


//create modular, mountable route handlers
const routerAPI = express.Router();


const apiV1 = (app) => {
    routerAPI.get("/", (req, res) => {
        res.json({
            name: "hung",
            function: "test"
        })
        // res.send('Hello World!')
        // console.log(">>> check action")
    })
    routerAPI.get("/:id?", (req, res) => {
        // res.json({
        //     name: "hung",
        //     function: "test"
        // })
        console.log("check")
        res.send('Hello World!')
    });

    routerAPI.get("/check", checkAcceptHeader, fetchUserController)

    routerAPI.get("/test/:_id", checkRoleAdmin, fetchUserController)

    return app.use("/v1/api", routerAPI)
}

export default apiV1