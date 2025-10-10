import express from 'express'

import 'dotenv/config'

import postRoutes from './routes/posts.js'

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/posts", postRoutes)
// app.use("/api/apartments", postRoutes);

app.listen(port, async () => {
    console.log('Listening on port: ', port)
})