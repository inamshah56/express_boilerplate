///////////////////////////////////////////////////////////////////////////////////////
// This is the method to apply the inner join in sequlize. Further we can see the sequlize documentation.
///////////////////////////////////////////////////////////////////////////////////////

// const crops = await Crop.findAll({
//     include: {
//         model: Cropvariety,
//         required: true,
//         where: { [soiltype]: true, irrigation_source: region },
//         attributes: ["variety_eng"],
//     },
//     attributes: ["crop_name"],
// });
// const crops_data = JSON.parse(JSON.stringify(crops));

///////////////////////////////////////////////////////////////////////////////////////
// For single record
///////////////////////////////////////////////////////////////////////////////////////
// let farm_lgs = await Farm.findOne({
//     include: [
//         {
//             model: Lgs,
//             required: true,
//             attributes: ["cropCropName", "sowed"],
//         },
//     ],
//     where: { uid },
//     attributes: ["size_acre"],
// });
// farm_lgs = JSON.parse(JSON.stringify(farm_lgs));
