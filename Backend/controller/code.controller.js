// import Code from "../model/code.model.js";
// import bcryptjs from "bcryptjs";

// export const codeing=async(req,res)=>{
//     try {
//         const {code}=req.body;
//         const hashCode = await bcryptjs.hash(code, 10);

//         const createcode=new Code({

//             code:hashCode,
//             exitdate: exitdate,
         
//         });
//         createcode.save()
//         res.status(201).json({message:"Registration successfully"});
//     } catch (error) {
//         console.log("Error: " + error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };