import 'dotenv/config'

import express from 'express'

// allows other HTTP methods besides GET and POST on an HTML form
import methodOverride from 'method-override'

const app = express()

import userRoutes from './routes/fruits.js'

// enables our EJS view engine 
app.set('view engine', 'ejs')

// serves static files from the public folder to the client (like css, images, etc.)
app.use(express.static('public'))
// formats data sent from client through something like an HTML form
app.use(express.urlencoded())
// formats data sent from client by other means (Postman, ThunderClient, fetch, etc.)
app.use(express.json())
// the '_method' represents the query string used in the request url (ex: ?_method=PUT)
app.use(methodOverride('_method'))

app.use("/fruits", userRoutes)

app.get("/", (req, res) => {
    res.redirect("/fruits")
})

app.listen(3000, () => {
    console.log('Listening on port: 3000')
})