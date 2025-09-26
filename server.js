const express = require("express")
 require('./config/Database')
 const userRouter = require('./Router/userRouter')
 const port = process.env.port || 1233

const app = express()
app.use(express.json())
app.use(userRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port${port}`);
    
})
