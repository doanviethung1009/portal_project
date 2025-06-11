import express from 'express'
import { createUserController, fetchUserController } from "../controllers/userController.js";
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

    routerAPI.get("/user", fetchUserController)

    routerAPI.post("/user", checkRoleAdmin, createUserController)

    return app.use("/v1/api", routerAPI)
}

export default apiV1