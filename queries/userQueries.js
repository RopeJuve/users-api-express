import { pool } from '../db.js';

export const findById = async (id) => {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return user.rows[0];
};

export const find = async () => {
    const users = await pool.query('SELECT * FROM users');
    return users.rows;
}
export const create = async (first_name, last_name, email) => {
    const newUser = await pool.query(
        'INSERT INTO users (first_name,last_name, email) VALUES($1, $2, $3) RETURNING *',
        [first_name, last_name, email]
    );
    return newUser.rows[0];
}

export const update = async (id, first_name, last_name, email) => {
    const updateUser = await pool.query(
        'UPDATE users SET first_name = $1,last_name=$2, email = $3 WHERE id = $4 RETURNING *',
        [first_name, last_name, email, id]
    );
    return updateUser.rows[0];
}

export const remove = async (id) => {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
}

