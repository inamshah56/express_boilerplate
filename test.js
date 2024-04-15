const a = {
    name: "Moin",
    lname: "Bukhari",
    obj: { father: "" },
};
const b = {};
// field = "father";
// if (!a.obj[field]) console.log("name not present.");
// else console.log("name exist");
if (Object.keys(b).length !== 0) console.log("yes");
else console.log("no");
