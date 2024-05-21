// ================================================================
// ===================== success responses ========================
// ================================================================

const successOk = (res, message) => {
    return res.status(200).send({
        success: true,
        message: message,
    });
};

// ===================== successOkWithData ========================

const successOkWithData = (res, data, message) => {
    return res.status(200).send({
        success: true,
        data: data,
        message: message,
    });
};

// ===================== created ========================

const created = (res, data, message) => {
    return res.status(201).send({
        success: true,
        message: message,
    });
};

// ===================== createdWithData ========================

const createdWithData = (res, data, message) => {
    return res.status(201).send({
        success: true,
        data: data,
        message: message,
    });
};

// ================================================================
// ===================== error responses ==========================
// ================================================================

// ===================== catchError ========================
const catchError = (res, error) => {
    return res.status(500).send({
        message: error.message || "Internal server error",
    });
};

const validationError = (res, key, message) => {
    return res.status(400).send({
        success: false,
        error: "user",
        message: message,
        key,
    });
};

// ===================== frontError ========================

const frontError = (res, message) => {
    return res.status(400).send({
        success: false,
        error: "front",
        message: message,
    });
};

// ===================== backError ========================
// This will be used when we are calling the other external Api's from backend And facing an issue.

const backError = (res, message) => {
    return res.status(400).send({
        success: false,
        error: "back",
        message: message,
    });
};

// ===================== backError ========================

const notFound = (res, message) => {
    return res.status(404).send({
        success: false,
        message: message,
    });
};

module.exports = {
    successOk,
    catchError,
    validationError,
    frontError,
    backError,
    successOkWithData,
    created,
    createdWithData,
    notFound
};
