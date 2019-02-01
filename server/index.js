require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((db) => { 
    app.set('db', db)
    db.get_properties()
})
.catch((err) => { console.log(err) });

app.get('/api/houses', controller.getProperties);
app.post('/api/newhome', controller.addProperty);
app.delete('/api/houses/:id', controller.deleteProperty);
// app.put(`/api/product/:id`, ctrl.editProduct)
// app.get(`/api/inventory/:id`, ctrl.getProduct)


const PORT = process.env.SERVERPORT;
app.listen(PORT, () => {
    console.log(`Onwards and Upwards ${PORT}`)
})