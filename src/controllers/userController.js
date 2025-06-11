
import { json } from "express"
import users from "../data/db.js"

const fetchUserController = (req, res) => {
    const accept = req.get('Accept');
    console.log("check ", accept)
    res.format({
        html: (req, res) => {
            return res.render("test")
        },
        json: (req, res) => {
            return res.status(200).json(users)

        },
        default: (req, res) => {
            res.status(406).send('Not Acceptable: Supported formats are html, text, and json');
        }
    })
}

export { fetchUserController }