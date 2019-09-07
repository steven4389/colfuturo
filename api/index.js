const express = require('express');
const app = express();
const cors = require('cors');

const {mongoose} = require('./database')

app.set('port', 3000)
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

app.use(require('./routes/userRoute'))
app.use(require('./routes/sendEmailRoute'))

app.listen(app.get('port'), ()=>{
    console.log("servidor full")
})