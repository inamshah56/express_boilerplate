// ================================================================
// ===================== imports ==================================
// ================================================================
const { queryReqFields, bodyReqFields } = require("./utils/requiredFields");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;

// ================================================================
// ===================== importing configs ========================
// ================================================================

const { sequelize, sequelize2 } = require("./config/sequelize");

// ================================================================
// ===================== middlewares ==============================
// ================================================================

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================================================================
// ===================== entry route ==============================
// ================================================================

app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to ExpressBoilerPlate" });
});
// test route
app.get("/test", (req, res) => {
    try {
        reqQueryFields = queryReqFields(req, res, ["fname", "lname"]);
        if (reqQueryFields.error) return reqQueryFields.resData;
        reqBodyFields = bodyReqFields(req, res, ["cnic", "email"]);
        if (reqBodyFields.error) return reqBodyFields.resData;

        return res.status(200).send({ message: "Welcome to Agronomics" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error" });
    }
});

// ================================================================
// ===================== importing routes =========================
// ================================================================

require("./routes/user/user.routes")(app);

// ================================================================
// ===================== database connection ======================
// ================================================================

Promise.all([
    sequelize.sync({ force: false }),
    // When need to work with other DB
    // OtherDb.sync({ force: false }), // Sync the models for the second database
])
    .then(() => {
        console.log(
            `==============================================================================`
        );
        console.log(
            "<<<<<<<<<<  database connection established successfully  >>>>>>>>>>"
        );
        console.log(
            "<<<<<<<<<<  models synchronized successfully with the database  >>>>>>>>>>"
        );

        // Start the server after syncing
        app.listen(PORT, () => {
            console.log(
                `<<<<<<<<<<  server is listening at http://localhost:${PORT}  >>>>>>>>>>`
            );
            console.log(
                `==============================================================================`
            );
        });
    })
    .catch((error) => {
        console.error(
            "<<<<<<<<<<  error connecting to the database or starting the server >>>>>>>>>> \n",
            error
        );
        console.log(
            `==============================================================================`
        );
    });
