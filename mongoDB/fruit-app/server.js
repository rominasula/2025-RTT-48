// server.js
import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import fruits from './data/fruits.js';

dotenv.config();

const app = express();
app.use(express.json()); // to parse JSON body

const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);
let fruitCollection;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('food');
    fruitCollection = db.collection('fruit');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// Seed route
app.get('/fruits/seed', async (req, res) => {
  try {
    await fruitCollection.deleteMany({});
    const result = await fruitCollection.insertMany(fruits);
    res.json({ inserted: result.insertedCount });
  } catch (err) {
    console.error('Seed error:', err);
    res.status(500).send('Failed to seed data');
  }
});

// Get all fruits
app.get('/fruits', async (req, res) => {
  try {
    const allFruits = await fruitCollection.find({}).toArray();
    res.json(allFruits);
  } catch (err) {
    console.error('Find error:', err);
    res.status(500).send('Failed to get fruits');
  }
});

// POST a new fruit
app.post('/fruits', async (req, res) => {
  try {
    const newFruit = req.body;
    const result = await fruitCollection.insertOne(newFruit);
    res.status(201).json(result);
  } catch (err) {
    console.error('Insert error:', err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE a fruit by ID
app.delete('/fruits/:id', async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await fruitCollection.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Fruit not found' });
    }
    res.json({ message: 'Fruit deleted', id: req.params.id });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); // connect when server starts
});
