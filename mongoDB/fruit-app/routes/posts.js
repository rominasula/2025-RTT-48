app.use(express.json()); // to parse JSON

app.post('/fruits', async (req, res) => {
  try {
    const newFruit = req.body;
    const result = await fruitCollection.insertOne(newFruit);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/fruits/:id', async (req, res) => {
    try {
        const result = await Fruit.findByIdAndDelete(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
