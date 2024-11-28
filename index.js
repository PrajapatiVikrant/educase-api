const express = require('express');
const {config} = require('dotenv')
const addSchool = require('./controller/addSchool');
const getSchool = require('./controller/getSchool');
const app = express()
config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/listSchools/:userLatitude/:userLongtitude',getSchool);
app.post('/addSchool',addSchool )


app.listen(process.env.PORT, () => {
    console.log("Server listen at 3000 port")
})

