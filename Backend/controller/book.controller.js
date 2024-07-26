import Book from "../model/book.model.js";
import bcryptjs from "bcryptjs";

export const booking = async (req, res) => {
    try {
        const { carnumber, entrydate, entrytime, exitdate, area, slot, amount, code } = req.body;

        // Check if the slot is already booked in the given area
        const existingBooking = await Book.findOne({ area: area, slot: slot });
        if (existingBooking) {
            return res.status(400).json({ message: "Slot already booked in this area" });
        }

        // Hash the code
        const hashCode = await bcryptjs.hash(code, 10);

        // Create a new booking record
        const createreg = new Book({
            carnumber: carnumber,
            entrydate: entrydate,
            entrytime: entrytime,
            exitdate: exitdate,
            area: area,
            slot: slot,
            amount: amount,
            code: hashCode,
        });

        await createreg.save();
        res.status(201).json({ message: "Parking slot booked successful" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const checkSlot = async (req, res) => {
    try {
        const { area, slot } = req.query;
        const existingBooking = await Book.findOne({ area: area, slot: slot });
        if (existingBooking) {
            return res.status(400).json({ message: "Slot already booked" });
        }
        res.status(200).json({ message: "Slot available" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


