
const errorNoti = (message) => {
    return ({
        errCode: 0,
        errMessage: "Error from the server",
        errDescription: JSON.stringify(message),
        errDetail: message
    })
}

export { errorNoti }