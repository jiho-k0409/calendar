var express = require('express');
var fs = require('fs');


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/main.html');
})

app.post('/toDoProcess', function(req,res){
  let body = req.body;
  let toDo = body.toDo;
  let id = body.id;
  console.log(body)
  fs.writeFile(`public/data/${id}.txt`,`${toDo}`,'utf-8',function(err){
    if (err === null) 
      { console.log('success'); 
    } else 
      { console.log('fail'); };
  })
  res.redirect(301,'/');
})

/*fs.readFile(`../data/${body.id}`, 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  return data;
})*/


app.listen(port, ()=>{
  console.log(`Example app listenign at http://localhost:${port}`)
})