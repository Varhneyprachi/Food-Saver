// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("./firebaseAdmin");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.status(401).send("Unauthorized");

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};

// In-memory storage for foods
let foods = [];

// Routes
app.get("/foods/my-foods", verifyToken, (req, res) => {
  const userFoods = foods.filter(f => f.email === req.user.email);
  res.json(userFoods);
});

app.post("/foods", verifyToken, (req, res) => {
  const food = { ...req.body, _id: Date.now().toString(), email: req.user.email };
  foods.push(food);
  res.json(food);
});

app.put("/foods/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  let updatedFood = null;
  foods = foods.map(f => {
    if (f._id === id) {
      updatedFood = { ...f, ...req.body };
      return updatedFood;
    }
    return f;
  });
  if (!updatedFood) return res.status(404).send("Food not found");
  res.json(updatedFood);
});

app.delete("/foods/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const initialLength = foods.length;
  foods = foods.filter(f => f._id !== id);
  if (foods.length === initialLength) return res.status(404).send("Food not found");
  res.json({ deletedCount: 1 });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
