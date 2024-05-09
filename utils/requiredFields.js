const { validationError, frontError } = require("./responses");

const queryReqFields = (req, res, field_list) => {
    for (const field of field_list) {
        if (!req.query[field] || req.query[field].trim() == '') {
            return {
                error: true,
                resData: frontError(res, `${field}: This field is required.`),
            };
        }
    }
    return { error: false, resData: {} };
};
const bodyReqFields = (req, res, field_list) => {
    let resObj = {};
    for (const field of field_list) {
        if (!req.body[field] || req.query[field].trim() == '') {
            resObj[[field]] = "This field is required.";
        }
    }
    if (Object.keys(resObj).length !== 0)
        return { error: true, resData: frontError(res, resObj) };
    else return { error: false, resData: {} };
};

module.exports = { queryReqFields, bodyReqFields };
