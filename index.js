// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes");z

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://priyanshi:priyanshi@cluster0.8idtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const local = 'mongodb://localhost:27017/pcie';

mongoose.connect(uri, {useNewUrlParser: true}).then(() => { // if connected successfully
    console.log('db connected ..'); 

    const app = express(); // initializing our app
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(routes);

    app.get('/', (request, response) => {
        response.sendFile('index.html',{root:__dirname});
    })
    
    app.listen(port, () => {    // starting server
        console.log('server started');
    });
    

}).catch((e) => {   // else catch the error, i.e. exception handling
    console.log(e.toString());
})