// controllers/meats.js
import { ObjectId } from 'mongodb'
import db from '../db.js'
import originalMeats from '../seed/meats.js'

async function index(req, res) {
    try {
        const collection = await db.collection("meats")
        const meats = await collection.find({}).toArray()
        res.render('meats/index', { meats })
    } catch (e) {
        res.json({ error: e.message })
    }
}

function newMeat(req, res) {
    res.render('meats/new')
}

async function show(req, res) {
    const collection = await db.collection("meats")
    const meat = await collection.findOne({ _id: new ObjectId(req.params.id) })
    res.render('meats/show', { meat })
}

async function edit(req, res) {
    const collection = await db.collection("meats")
    const meat = await collection.findOne({ _id: new ObjectId(req.params.id) })
    res.render('meats/edit', { meat })
}

async function create(req, res) {
    req.body.readyToEat = req.body.readyToEat === 'on'
    const collection = await db.collection("meats")
    await collection.insertOne(req.body)
    res.redirect('/meats')
}

async function update(req, res) {
    req.body.readyToEat = req.body.readyToEat === 'on'
    const collection = await db.collection("meats")
    await collection.replaceOne({ _id: new ObjectId(req.params.id) }, req.body)
    res.redirect('/meats')
}

async function remove(req, res) {
    const collection = await db.collection("meats")
    await collection.deleteOne({ _id: new ObjectId(req.params.id) })
    res.redirect('/meats')
}

async function seed(req, res) {
    const collection = await db.collection("meats")
    await collection.deleteMany({})
    await collection.insertMany(originalMeats)
    res.redirect('/meats')
}

export default {
    index,
    new: newMeat,
    show,
    edit,
    create,
    update,
    delete: remove,
    seed
}
