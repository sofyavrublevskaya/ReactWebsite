import pool from '../models/db.js';

export const submitContact = async (req, res) => {
    const { fullName, email, phone, subject, message } = req.body;

    try {
        // Валидация данных
        const existingContact = await pool.query(
            "SELECT email, phone FROM contact_submissions WHERE email = $1 OR phone = $2",
            [email, phone]
        );

        const errors = {};
        for (const contact of existingContact.rows) {
            if (contact.email === email) {
                errors.email = "Email already exists";
            }
            if (contact.phone === phone) {
                errors.phone = "Phone already exists";
            }
        }

        if (Object.keys(errors).length > 0) {
            return res.status(409).json({
                message: "Validation failed",
                errors,
            });
        }

        await pool.query(
            "INSERT INTO contact_submissions (full_name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)",
            [fullName, email, phone, subject, message]
        );

        return res.status(200).json({ message: "Contact submission created successfully" });
    } catch (err) {
        console.error("Error creating contact submission:", err);
        return res.status(500).json({ message: "Server error" });
    }
};
