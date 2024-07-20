// import Area from "../model/area.model.js";

// export const getArea = async(req,res)=>{
//   try{
//      const { Location } = req.body;
//     const myArea = await Area.find({ Location });
//     res.status(200).json({myArea});
    
//   //  const location = document.getElementById("location").value;
//   // const myArea = await Area.findOne({Location});
//   // res.status(200).json({myArea});
// }catch (error) {
//     console.log("Error: " + error.message);
//     res.status(500).json({ message: "Internal server error" });
// }
// }; 
import Area from "../model/area.model.js";

export const getArea = async (req, res) => {
  try {
    const { Location } = req.query; // Use req.query for GET request parameters
    const myArea = await Area.find({ Location });
    res.status(200).json(myArea); // Directly return the array of areas
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
