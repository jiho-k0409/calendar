const { Console } = require('console');
var express = require('express');
var fs = require('fs');
var sA = require('./sort')

const app = express();
//const port = 3000;
var router = express.Router();

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('view engine','ejs');

app.get('/', (req, res)=>{
  let dateArray = [];
  let fileArray=[];
  let selectedMonth = req.query.month;

  const files = fs.readdirSync('public/data','utf8');

  files.forEach(function(element){
    let splitElement = element.split('.',3);
    let date = splitElement[1];
    let month = splitElement[0];
    console.log({
      date : date,
      month:month
    })
    let finalDate = `${month}월 ${date}일`;
    if (month===selectedMonth){
      let toDoText = fs.readFileSync(`./public/data/${element}`);
      toDoText=toDoText.toString();
      dateArray.push(finalDate);
      fileArray.push(toDoText);
      sA.arr(dateArray,fileArray,month)
    }else if(month!==selectedMonth){ 

    }else if(files.length===0){

    }
  });
  res.render('index',{date : dateArray, description : fileArray})
})


app.get('/create',(req,res)=>{
  res.render('create')
})

app.post('/create/process', (req,res)=>{
  let month = req.body.month
  let date = req.body.date
  let toDo = req.body.toDo
  fs.writeFile(`./public/data/${month}.${date}.txt`,toDo,(err)=>{
    if (err) throw err;
  })
  res.redirect(301,`/?month=${month}`)
})

app.post('/delete_process',(req,res)=>{
  var body = req.body
  var date = body.date
  let replacedDate = date.replace('월 ','.')
  let month = date.split('월',1)[0]
  let fileName = replacedDate.replace('일','.txt')
  fs.unlink(`./public/data/${fileName}`,(err)=>{
    if (err) throw err;
  })
  res.redirect(301,`/?month=${month}`)
})
 
app.listen(process.env.PORT || 5000)