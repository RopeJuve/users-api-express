import { pool } from '../db.js';

export const checkUser = async (req, res, next) => {
    const { id } = req.params;
    if (!Number.isInteger(parseInt(id, 10))) {
        return res.status(400).json({ error: "Invalid user ID" });
    }
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (user.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user.rows[0];
        next();

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};