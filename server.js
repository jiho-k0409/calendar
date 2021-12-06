var express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.send('<h1><a href="/main.html">시작하기</h1>')
})

app.get('/main.html',(req, res)=>{
  
})

app.listen(port, ()=>{
  console.log(`Example app listenign at http://localhost:${port}`)
})