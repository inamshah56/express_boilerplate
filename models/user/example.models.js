// ===================================================================
// ================= To make foreign key a primary key ===============
// ===================================================================

// userUid: {
//     type: DataTypes.UUID,
//     primaryKey: true,
//     allowNull: false,
//     references: {
//         model: "user",
//         key: "uid",
//     },
// },

// ===================================================================
// =================== To declare enum datatype ======================
// ===================================================================

// sowing_method: {
//     type: DataTypes.ENUM(
//         "optionA",
//         "optionB",
//         "optionC",
//         "none"
//     ),
//     defaultValue: "none",
// },

// ===================================================================
// ======================= relations Examples ========================
// ===================================================================
// const User = require("../user/user.model");
// const ModelA = require("../A/modelA.model");
// const ModelB = require("../B/modelB.model");
// ######################## Has Many ####################
// ======================== First =====================
// By default onDelete set to CASCADE which means by deleting the parent model record it will delete all the record associated to it in the related tables.
// User.ModelA = User.hasMany(ModelA);
// ModelA.User = ModelA.belongsTo(User);

// ######################## Has One ####################
// ======================== Second =====================
// This will not delete the related records and set FK to null.
// ModelB.User = ModelB.hasMany(User, { onDelete: "Set NULL" });
// User.ModelB = User.belongsTo(ModelB);

// ModelC.User = ModelC.hasOne(User);
// User.ModelC = User.belongsTo(ModelC);
