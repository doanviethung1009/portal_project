import User from "../models/Users.js"
import resultData from "../shared/resultData.js"



const createUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await User.create({
                username: data.username,
                email: data.email
            })
            resolve({
                errCode: 0,
                errMess: "User has created by admin",
                errData: res.dataValues,
            })
        } catch (error) {
            reject(error)
        }
    })
}

const fetchUserService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await User.findAll({
                // raw: true
            })

            // console.log('All users:', JSON.stringify(res, null, 2));

            // console.log('All users2:', res);
            resolve(resultData(res))
        } catch (error) {
            reject(error)
        }
    })

}

const deleteUserServiceByID = async (_id) => {
    const deleted = await User.destroy({ where: { id } });
    if (deleted === 0) {
        return { errCode: 1, errMessage: "User not found" };
    } else
        return { errCode: 0, errMessage: "User deleted" };


}

export { createUserService, fetchUserService, deleteUserServiceByID }