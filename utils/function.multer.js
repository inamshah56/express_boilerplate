const fs = require("fs");

// Function to create the destination directory if it doesn't exist
const createDestinationDirectory = (destinationDir, cb) => {
    fs.access(destinationDir, fs.constants.F_OK, (err) => {
        if (!err) {
            // Directory already exists
            console.log(
                "<<<<<<<<<<  Destination directory already present:",
                destinationDir + "  >>>>>>>>>>"
            );
            console.log(
                `==============================================================================`
            );
            cb(null);
        } else {
            // Directory does not exist, create it
            fs.mkdir(destinationDir, { recursive: true }, (err) => {
                if (err) {
                    console.error(
                        "<<<<<<<<<<  Error creating destination directory:",
                        err + "  >>>>>>>>>>"
                    );
                    console.log(
                        `==============================================================================`
                    );
                    cb(err);
                } else {
                    console.log(
                        "<<<<<<<<<<  Destination directory created successfully:",
                        destinationDir + "  >>>>>>>>>>"
                    );
                    console.log(
                        `==============================================================================`
                    );
                    cb(null);
                }
            });
        }
    });
};
// ============================================================================
// ============================================================================
// ============================================================================

module.exports = { createDestinationDirectory };
