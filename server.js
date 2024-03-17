// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize({
//     storage: process.env.DB_CONNECTION,
//     dialect: 'postgres',
//     username: `${process.env.DB_USERNAME}`,
//     password: `${process.env.DB_PASSWORD}`
//   })
  
  

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.DB_CONNECTION}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})