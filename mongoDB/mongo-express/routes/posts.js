import express from 'express'

const router = express.Router()

import db from '../db.js'

import { ObjectId } from 'mongodb'

// Get a list of 10 posts
router.get('/', async (req, res) => {
    try {
        const collection = await db.collection("posts")
        const results = await collection.find({}).limit(10).toArray()
        res.json(results).status(200)
    } catch(e) {
        console.log(e)
        res.json(e).status(400)
    }
})

// Get a post by id         paramater: id, argument: 50ab0f8bbcf1bfe2536dc401
router.get('/:id', async (req, res) => {
    try {
        const collection = await db.collection("posts")
        const query = { _id: new ObjectId(req.params.id) }
        const results = await collection.findOne(query)
        res.json(results).status(200)
    } catch(e) {
        res.json({ error: e.message }).status(400)
    }
})

//   /api/posts/
router.post('/', async (req, res) => {
    try {
        const collection = await db.collection("posts")
        req.body.date = new Date()
        const result = await collection.insertOne(req.body)
        res.json(result).status(200)
    } catch(e) {
        console.log(e)
        res.json({ error: e.message }).status(400)
    }

})

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
    try {
        const collection = await db.collection("posts")
        const query = { _id: new ObjectId(req.params.id) }
        const updates = {
            $push: { comments: req.body }
        }
        const result = await collection.updateOne(query, updates)
        res.json(result).status(200)
    } catch(e) {
        console.log(e)
        res.json({ error: e.message }).status(400)
    }
})

// Delete a post by id

router.delete("/:id", async (req, res) => {
    try {
        const collection = await db.collection("posts")
        const query = { _id: new ObjectId(req.params.id) }
        const result = await collection.deleteOne(query)
        res.json(result).status(200)
    } catch(e) {
        console.log(e)
        res.json({ error: e.message }).status(400)
    }
})

// updateOne(query, updates)

export default router