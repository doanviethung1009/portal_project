import express, { json, Router } from "express"
import users from '../data/db.js'

import userFormat from "../formats/userFormat.js"

const api = express.Router()



function formatCall(obj) {
    return (req, res) => {
        return res.format(obj)
    }

}
const formatModules = {}

const exampleAPI = (app) => {

    api.get("/test", function (req, res) {
        res.format({
            html: function () {
                res.send(
                    '<ul>' + users.map(function (user) {
                        return '<li>' + user.name + '</li>'
                    }).join('')
                    + '</ul'
                );
            },
            text: function () {
                res.send(users.map(function (user) {
                    return ' - ' + user.name + '\n';
                }).join(''));

            },
            json: function () {
                res.json(users)
            },
            'application/xml': function () {
                const xml = js2xmlparser.parse("users", { user: users });
                res.type('application/xml').send(xml);
            },
            default: (req, res) => {
                res.status(406).send('Not Acceptable: Supported formats are html, text, and json');
            }

        })
    })

    api.get("/user", formatCall(userFormat))




    return app.use("/api", api)
}

export default exampleAPI