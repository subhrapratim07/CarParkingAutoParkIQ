import Book from "../model/book.model.js";
import bcryptjs from "bcryptjs";
export const booking= async(req,res)=>{
    try {
        const {carnumber,entrydate,entrytime,exitdate,area,slot,amount,code}=req.body;
        const hashCode = await bcryptjs.hash(code, 10);

        const createreg=new Book({

            carnumber: carnumber,
            entrydate: entrydate,
            entrytime: entrytime,
            exitdate: exitdate,
            area: area,
            slot: slot,
            amount: amount,
            code:hashCode,

        });
       await createreg.save()
        res.status(201).json({message:"Registration successfully"});
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};