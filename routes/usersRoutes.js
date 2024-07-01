import express from 'express';
const usersRouter = express.Router();
import { checkUser } from '../middleware/checkUser.js';

import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/usersControllers.js';

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', checkUser, getUserById);
usersRouter.put('/:id', checkUser, updateUser);
usersRouter.delete('/:id', checkUser, deleteUser);

export default usersRouter;