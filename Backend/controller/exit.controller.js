import Book from "../model/book.model.js";

export const exiting = async (req, res) => {
    try {
        const {carnumber } = req.body;

        // Find and delete the document matching carnumber, entrydate, and slot
        const deletedCode = await Book.findOneAndDelete({ carnumber});

        // Check if the document was found and deleted
        if (!deletedCode) {
            return res.status(400).json({ message: "Invalid data or entry not found" });
        }

        // Respond with success
        res.status(200).json({
            message: "Data deletion successful",
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
