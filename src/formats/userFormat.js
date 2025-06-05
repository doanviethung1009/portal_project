
import { json, text } from "express"
import js2xmlparser from "js2xmlparser"
import users from "../data/db.js"

export default {
    html: (req, res) => {
        res.send('<ul>' + users.map(user => `<li> ${user.name} </li>`).join('') + '</ul>')
    },
    text: (req, res) => {
        res.send(users.map(user => ` - ${user.name} \n`).join(''));
    },
    json: (req, res) => {
        res.json(users)
    },
    'application/xml': (req, res) => {
        const xml = js2xmlparser.parse("users", { user: users });
        res.type('application/xml').send(xml);
    },
    default: (req, res) => {
        res.status(406).send('Not Acceptable: Supported formats are html, text, json, xml')
    }
}