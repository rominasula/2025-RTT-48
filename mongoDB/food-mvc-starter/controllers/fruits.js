import { ObjectId } from 'mongodb'
import db from '../db.js'

import originalFruits from '../seed/fruits.js'

async function displayListOfFruitPage(req, res) {
    try {
        const collection = await db.collection("fruits")
        const fruits = await collection.find({}).toArray()
        res.render('fruits/index', { fruits })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

function displayAddFruitPage(req, res) {
    try {
        res.render('fruits/new')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayFruitDetailsPage(req, res) {
    try {
        const collection = await db.collection("fruits")
        const fruit = await collection.findOne({ _id: new ObjectId(req.params.id) })
        res.render('fruits/show', { fruit })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function displayEditFruitPage(req, res) {
    try {
        const collection = await db.collection("fruits")
        const fruit = await collection.findOne({ _id: new ObjectId(req.params.id) })
        res.render('fruits/edit', { fruit })
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function addFruit(req, res) {
    try {
        req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        const collection = await db.collection("fruits")
        await collection.insertOne(req.body)
        res.redirect('/fruits')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function updateFruit(req, res) {
    try {
        console.log('PUT')
        console.log(req.body)
        req.body.readyToEat = req.body.readyToEat === "on" ? true : false
        const collection = await db.collection("fruits")
        const result = await collection.replaceOne({ _id: new ObjectId(req.params.id) }, req.body)
        console.log(result)
        res.redirect('/fruits')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function deleteFruit(req, res) {
    try {
        const collection = await db.collection("fruits")
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) })
        console.log(result)
        res.redirect('/fruits')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

async function resetFruitData(req, res) {
    try {
        const collection = await db.collection("fruits")
        const resultDelete = await collection.deleteMany({})
        const resultInsert = await collection.insertMany(originalFruits)
        console.log({ ...resultDelete, ...resultInsert })
        res.redirect('/fruits')
    } catch(e) {
        console.log(e.message)
        res.json({ error: e.message })
    }
}

// renaming the functions in the export
export default {
    index: displayListOfFruitPage,
    new: displayAddFruitPage,
    edit: displayEditFruitPage,
    show: displayFruitDetailsPage,
    create: addFruit,
    update: updateFruit,
    delete: deleteFruit,
    seed: resetFruitData,
}