import express from 'express'
import  "@controllers/UserController"
const app = express()
app.use('/', (req, res) => {
 return  res.json({menssage: "Hello Word!"})
})

app.listen(3000,()=> console.log("Server....")
)