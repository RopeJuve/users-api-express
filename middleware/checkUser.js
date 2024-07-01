import { findById } from '../queries/userQueries.js';

export const checkUser = async (req, res, next) => {
    const { id } = req.params;
    if (!Number.isInteger(parseInt(id, 10))) {
        return res.status(400).json({ error: "Invalid user ID" });
    }
    try {
        const user = await findById(id);
        if (user === undefined) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};