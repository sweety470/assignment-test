const express = require('express');
require('dotenv').config()
const app =express()
const port = process.env.PORT || 3300
const db = require('./models/index')
const cors = require('cors')

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors());

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)



app.use('/app/v1',require('./routers/user'))
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})