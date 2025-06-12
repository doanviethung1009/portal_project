import User from "../models/Users.js";

const checkItemExist = async (req, res, next) => {
    const res1 = await User.findByPk(req.query.id)
    console.log("check res1", res1)
    if (res1 === null) {
        return ({
            errCode: 1,
            errMessage: "User not found"
        });
    } else next()

};

export default checkItemExist;