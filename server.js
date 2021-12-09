var express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/main.html')
})


app.listen(port, ()=>{
  console.log(`Example app listenign at http://localhost:${port}`)
})