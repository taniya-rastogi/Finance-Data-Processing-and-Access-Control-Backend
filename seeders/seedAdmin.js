// financial-records-backend\seeders\seedAdmin.js
require("dotenv").config();
const bcryptjs = require("bcryptjs");
const db = require("../src/config/db");

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error("ADMIN_EMAIL or ADMIN_PASSWORD missing in .env");
  process.exit();
}

const seedAdmin = async () => {
  try {
    console.log("Seeder started...");

    // Check if admin exists
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    console.log("Check result:", rows);

    if (rows.length > 0) {
      console.log("Admin already exists");
      process.exit();
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Insert admin
    await db.query(
      `INSERT INTO users (email, password, role)
       VALUES (?, ?, ?)`,
      [email, hashedPassword, "admin"]
    );

    console.log("Admin created successfully");
    process.exit();

  } catch (error) {
    console.error("Error:", error);
    process.exit();
  }
};

seedAdmin();