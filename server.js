require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./configu/dbconfig");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const brandRoutes = require("./routes/brandRoutes");
const carModelRoutes = require("./routes/carModelRoutes");
const sparePartRoutes = require("./routes/sparePartRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();
const PORT = process.env.PORT || 8000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===== DATABASE =====
connectDB();

// ===== ROUTES =====
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/brands", brandRoutes);
app.use("/models", carModelRoutes);
app.use("/spareparts", sparePartRoutes);
app.use("/categories", categoryRoutes);
app.use("/admin", adminRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/", reviewRoutes);

// ===== TEST =====
app.get("/", (req, res) => res.send("Car Website API running"));

// ===== START SERVER =====
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));