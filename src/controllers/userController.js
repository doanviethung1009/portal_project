
import { json } from "express"
// import users from "../data/db.js"
import { errorNoti } from "../shared/errorNotification.js";
import { createUserService, deleteUserServiceByID, fetchUserService } from "../service/userService.js";

const fetchUserController = async (req, res) => {
    // const accept = req.get('Accept');
    // console.log("check ", accept)
    const message = await fetchUserService()
    // console.log("check ", message.errData)
    res.format({
        html: (req, res) => {
            return res.render("pageUser", { data: message.errData })
        },
        json: (req, res) => {
            return res.status(200).json(message)

        },
        default: (req, res) => {
            res.status(406).send('Not Acceptable: Supported formats are html, text, and json');
        }
    })
}

const createUserController = async (req, res) => {

    try {
        const message = await createUserService(req.query)
        console.log(">>check 2 ", message)
        return res.status(200).json(message)
    } catch (error) {
        return res.status(500).json(errorNoti(error))
    }
}

const deleteUserController = async (req, res) => {
    // console.log(">> id  ", req.query.id)
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ message: "Missing ID" });
    }

    try {
        const result = await deleteUserServiceByID(id);
        const status = result.errCode === 0 ? 200 : 404;
        // return res.status(status).json({ errMessage: result.errMessage });
        return res.status(status).json(result);
    } catch (error) {
        return res.status(500).json({ errMessage: error.message });
        // return res.status(500).json(error);
    }


}

export { fetchUserController, createUserController, deleteUserController }