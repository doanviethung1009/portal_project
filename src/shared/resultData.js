

const resultData = (data) => {
    // console.log(">>> check data", data)
    return ({
        errCode: 0,
        errMessage: "Fetch data successful",
        errData: data
    })
};

export default resultData;