const express = require('express');
const cors = require('cors')

const app = express();

 
app.use(cors());
//-----------------------settings

app.set('appName','proyectoBD');

//--------------------------------


app.use(express.json());



app.listen(3000);
console.log(`server ${app.get('appName')} on port ${3000}`)