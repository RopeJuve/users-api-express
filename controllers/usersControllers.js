// Description: All user controllers are defined here.
import { create, find, update, remove } from '../queries/userQueries.js';

export const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        const newUser = await create(first_name, last_name, email);
        res.json(newUser);
    } catch (error) {
        console.error(error.message);
    }
};

export const getUsers = async (req, res) => {
    try {
        const allUsers = await find();
        res.json(allUsers);
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
        const { first_name, last_name, email } = req.body;
        const updateUser = await update(id, first_name, last_name, email);
        res.json(updateUser);
    } catch (error) {
        console.error(error.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.user;
        await remove(id);
        res.json({ message: `User with id=${id} was deleted` });
    } catch (error) {
        console.error(error.message);
    }
};