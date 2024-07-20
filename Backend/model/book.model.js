import mongoose from "mongoose";
 const bookSchema=mongoose.Schema({

    carnumber: {
        type:String,
        required:true
    },
    entrydate:{
        type:String,
        required:true,
    },
    entrytime:{
        type:String,
        required:true
    },
    exitdate:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    slot:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    
});
const Book=mongoose.model("Book",bookSchema);
export default Book;