import express from 'express';

import { postCategory } from '../controllers/categoryController';

const router = express.Router();

router.post('/postcategory', postCategory);

// import express from 'express';
// import { getAllUsers, createUser } from '../controllers/userController';

// const router = express.Router();

// router.get('/', getAllUsers);
// router.post('/', createUser);

export default router;