// config/multer.js
const multer = require("multer");
const { createDestinationDirectory } = require("../utils/function.multer");

// File type map
const FILE_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("Invalid Image type");
        if (isValid) {
            uploadError = null;
        }

        // Get the field name of the uploaded file
        const fieldname = file.fieldname;
        // Set the destination directory based on the field name
        let destinationDir = "./uploads/user/";
        if (fieldname === "profile_pic") {
            destinationDir += "profile_pic/";
        } else if (fieldname === "cnic_front") {
            destinationDir += "cnic_front/";
        } else if (fieldname === "cnic_back") {
            destinationDir += "cnic_back/";
        } else {
            // Handle unsupported field names
            return cb(new Error("Unsupported field name"));
        }
        // Create the destination directory if it doesn't exist
        createDestinationDirectory(destinationDir, (err) => {
            cb(err, destinationDir);
        });
    },
    filename: function (req, file, cb) {
        // Check if any image file is uploaded
        const imageFields = ["profile_pic", "cnic_front", "cnic_back"];
        const isImageUploaded = imageFields.some(
            (fieldName) =>
                req.files &&
                req.files[fieldName] &&
                req.files[fieldName].length > 0
        );
        // If any image is uploaded and CNIC is not provided, return error
        if (!req.body.cnic && isImageUploaded) {
            console.log("<<<<<<<<<<  Please provide CNIC  >>>>>>>>>>");
            console.log(
                `==============================================================================`
            );
            return cb(new Error("Please provide CNIC"));
        }

        const cnicNo = req.body.cnic;

        if (cnicNo) {
            const cnicRegex = /^[0-9]{13}$/; // Regex to match 13 numeric characters
            if (!cnicRegex.test(cnicNo)) {
                console.log(
                    "<<<<<<<<<<  Invalid CNIC format. CNIC must be 13 digits long and contain only numbers  >>>>>>>>>>"
                );
                console.log(
                    `==============================================================================`
                );
                return cb(
                    new Error(
                        "Invalid CNIC format. CNIC must be 13 digits long and contain only numbers"
                    )
                );
            }
        }
        const fileName = `${cnicNo}.${FILE_TYPE_MAP[file.mimetype]}`;
        cb(null, fileName);
    },
});

// File type filter function
const fileFilter = (req, file, cb) => {
    const isValid = !!FILE_TYPE_MAP[file.mimetype];
    if (isValid) {
        cb(null, true); // Accept the file
    } else {
        cb(
            new Error(
                "Invalid file type. Only JPEG, JPG, and PNG files are allowed."
            ),
            false
        ); // Reject the file
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;
