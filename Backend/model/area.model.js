import mongoose from "mongoose";

const areaSchema = mongoose.Schema({

    Location: String,
    RoadName: String,
    ParkingStretch: String,
    ParkingSide: String,
    Remarks:String,
    Cost: Number

});
 const Area = mongoose.model("Area", areaSchema);
 export default Area;