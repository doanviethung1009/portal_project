import express from 'express'
import { fetchUserController } from "../controllers/userController.js";
import { checkAcceptHeader, checkRoleAdmin } from "../middlewares/checkHeaderAccept.js";


//create modular, mountable route handlers
const routerAPI = express.Router();


const apiV1 = (app) => {
    // routerAPI.get("/", (req, res) => {
    //     res.json({
    //         name: "hung",
    //         function: "test"
    //     })
    // });


    routerAPI.get("/check", checkAcceptHeader, fetchUserController)

    routerAPI.get("/test/", checkRoleAdmin, fetchUserController)

    return app.use("/v1/api", routerAPI)
}

export default apiV1