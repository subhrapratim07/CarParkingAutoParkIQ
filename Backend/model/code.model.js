import mongoose from "mongoose";
 const codeSchema=mongoose.Schema({

    code: {
        type:String,
        required:true
    },
    exitdate:{
        type:String,
        required:true,
    },
    
});
const Code=mongoose.model("Code",codeSchema);
export default Code;