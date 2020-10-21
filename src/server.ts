import express from 'express'
const app = express()
app.use('/', (req, res) => {
 return  res.json({menssage: "Hello Word!"})
})

app.listen(3000,()=> console.log("Server....")
)