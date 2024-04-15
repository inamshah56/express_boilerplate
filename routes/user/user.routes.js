module.exports = (app) => {
    const router = require("express").Router();
    const { verifyToken } = require("../../middlewares/user/jwtMiddleware");
    const { multerErrors } = require("../../middlewares/user/multerErrors");
    const userController = require("../../controllers/user/user.controllers");
    const otpController = require("../../controllers/user/otp.controller");

    const {
        otpLimiter,
        wrongOtpLimiter,
    } = require("../../middlewares/user/otpLimit");
    // Import the Multer configuration
    const upload = require("../../config/multer");

    // ================================================================
    // ===================== routes ===================================
    // ================================================================

    router
        .route("/me")
        .get(verifyToken, userController.me)
        .patch(
            [
                verifyToken,
                (req, res, next) => {
                    const { full_name, cnic } = req.body;
                    req.locals = { full_name, cnic };
                    next();
                },
                upload.fields([
                    { name: "profile_pic", maxCount: 1 },
                    { name: "cnic_front", maxCount: 1 },
                    { name: "cnic_back", maxCount: 1 },
                ]),
                multerErrors,
            ],
            userController.updateUser
        );
    router.post("/generate-otp", otpLimiter, otpController.generateOtp);
    router.post("/verify-otp", wrongOtpLimiter, otpController.verifyOtp);

    app.use("/auth", router);
    // =====================================
    // if we wanted to apply middleware on the whole route file
    // app.use("/auth",middleware1, middleware2, router);
};
