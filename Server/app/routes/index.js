var express = require('express');
const Mongoose = require('mongoose');
var router = express.Router();

var Schema=Mongoose.Schema;
var groupSchema=new Schema({
  teamID:0,
    teamName:'',
    teamImg:'',
    captain:{},
    memberinfo:[],
    candidateinfo:[],
    title:'',
    content:'',
    needNum:0,
    candidateNum:0,
    tag:'',
    endTime:'',
    updateTime:''
})
var groupModel=Mongoose.model("groups",groupSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/db',function(req,res,next){
  //获取参数
  var query = req.body;

  console.log('post 请求：参数',query);
  groupModel.create(query,function(err){
    if(!err){
      console.log('插入成功');
    }
  })
  res.send('Hello');
})

module.exports = router;
