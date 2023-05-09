import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import Routes from '../Server/routes/route.js'
import Connection from './database/db.js'


const app = express()
dotenv.config()
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.json({limit: "500mb"}));
// app.use(bodyParser.json({extended: true}))
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({limit: "500mb", extended:true}));
app.use(cors())
app.set("view engine" , "ejs")
app.use(express.urlencoded({extended: false}))
app.use('/', Routes)


const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const PORT = 8080;
Connection(username , password)
app.listen(PORT, ()=>console.log(`Server is running in port ${PORT}`))