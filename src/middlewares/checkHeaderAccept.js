

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
    console.log(">>> check query params: ", req.query.id)
    const role = req.query.role
    if (!role) {
        // return res.send("you need to login")
        next()
    }
    else if (role != "admin") {
        return res.send(`you aren't authorize ${role}`)
    }

    next()
}

export { checkAcceptHeader, checkRoleAdmin }
