const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require('path');
const cors = require('cors')


const app = express()
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 5000

const MongodbConfig = require('./src/database/MongoDbConfig')
app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({ extended : true}))  

app.use('/api/common', require('./src/routes/common-routes'))
// app.use('/api/admin', require('./src/routes/admin-routes'))
app.use('/api/creator', require('./src/routes/creator-routes'))
app.use('/api/audience', require('./src/routes/audience-routes'))
app.use('/api/event', require('./src/routes/event-routes'))

MongodbConfig.connectMongoDb()
        .then((result)=>{
            console.log("Db connection has been established.")
            app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
        })
        .catch((err)=>{
            console.log("DB connection error :", err)
        })

module.exports = app        