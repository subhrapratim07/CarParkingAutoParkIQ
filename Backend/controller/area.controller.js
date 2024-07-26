
// import Area from "../model/area.model.js";

// export const getArea = async (req, res) => {
//   try {
//     const { Location } = req.query; // Use req.query for GET request parameters
//     const myArea = await Area.find({ Location });
//     res.status(200).json(myArea); // Directly return the array of areas
//   } catch (error) {
//     console.log("Error: " + error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
import Area from "../model/area.model.js";
import Book from "../model/book.model.js";

export const getArea = async (req, res) => {
  try {
    const { Location } = req.query;
    const areas = await Area.find({ Location });

    const areasWithAvailability = await Promise.all(
      areas.map(async (area) => {
        const bookings = await Book.find({ area: area.RoadName });
        const availableSlots = [1, 2, 3, 4].filter(
          (slot) => !bookings.some((booking) => booking.slot === slot)
        );
        return {
          ...area._doc,
          availableSlots
        };
      })
    );

    res.status(200).json(areasWithAvailability);
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
