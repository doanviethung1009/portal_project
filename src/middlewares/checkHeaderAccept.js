

const checkAcceptHeader = (req, res, next) => {
    const accept = req.get('Accept')
    const allowedTypes = ['application/json, text/html, text/plain, application/xml']

    if (accept === "*/*") {
        return res
            .status(406)
            .send(`❌ Not Acceptable: must accept one of ${allowedTypes}`);
    }
    next();
}

const checkRoleAdmin = (req, res, next) => {
    // const role = req.params.role
    const role2 = req.query._id
    const role = req.query.name
    console.log(">> check ", role2)
    if (role != "admin") { return res.send(`you aren't authorize ${role}`) }
    else if (!role) { return res.send("you need to login") }
    next()
}

export { checkAcceptHeader, checkRoleAdmin }
