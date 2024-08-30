import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controller/productController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
