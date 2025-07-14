import Category from "../models/categoryModel";
import { Request, Response } from "express";

export const postCategory = async (req: Request, res: Response) => {
  try {
    const { category_name } = req.body;
    const existing = await Category.findOne({ category_name });

    if (existing) {
      return res.status(400).json({ message: "Category Already Exists" });
    }

    let category = new Category(category_name);
    category = await category.save();

    res
      .status(201)
      .json({ message: "Category Created Successfully", category });
  } catch (error) {
    res.status(400).json({ message: "Failed to create category", error });
  }

//   let category = new Category(req.body);
//   category = await category.save();
//   if (!category) {
//     return res.status(400).json({ error: "Something went wrong" });
//   }
//   res.json({ category });
};

// POST /api/users
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password } = req.body;
//     const existing = await User.findOne({ email });

//     if (existing) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = new User({ name, email, password }); // Password hashing recommended
//     await user.save();

//     res.status(201).json({ message: 'User created', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create user', error });
//   }
// };
