import Book from "../model/book.model.js";
import bcryptjs from "bcryptjs";

export const verifing = async (req, res) => {
    try {
        const { code, carnumber, entrydate } = req.body;

        // Find the document matching both carnumber and entrydate
        const codes = await Book.findOne({ carnumber, entrydate });

        // Check if code exists in the database
        if (!codes) {
            return res.status(400).json({ message: "wrong information" });
        }

        // Compare the provided code with the hashed code in the database
        const isMatch = await bcryptjs.compare(code, codes.code);

        // Check if the comparison was successful
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid code" });
        }

        // If both checks pass, respond with success
        res.status(200).json({
            message: "Code verification successful",
            codes: {
                _id: codes._id,
                code: codes.code,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
