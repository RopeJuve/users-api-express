import { pool } from '../db.js';

export const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        const newUser = await pool.query(
            'INSERT INTO users (first_name,last_name, email) VALUES($1, $2, $3) RETURNING *',
            [first_name, last_name, email]
        );
        res.json(newUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
};

export const getUsers = async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users');
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
};

export const getUserById = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.error(error.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.user;
        const { first_name,last_name, email } = req.body;
        const updateUser = await pool.query(
            'UPDATE users SET first_name = $1,last_name=$2, email = $3 WHERE id = $4 RETURNING *',
            [first_name,last_name, email, id]
        );
        res.json(updateUser.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.user;
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.json('User was deleted!');
    } catch (error) {
        console.error(error.message);
    }
};