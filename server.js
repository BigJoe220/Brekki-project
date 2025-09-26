const express = require("express")
 require('./config/Database')
const app = express()
const port = process.env.port || 1233

app.use(express.json())

app.listen(port, ()=>{
    console.log(`Server is running on port${port}`);
    
})
