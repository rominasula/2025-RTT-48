// import express from 'express'

import 'dotenv/config'

// const app = express()

// const port = process.env.PORT || 5000

// app.use(express.json());
// 



import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/apartments", postRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


