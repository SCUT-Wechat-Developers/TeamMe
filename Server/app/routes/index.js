var express = require('express');
const Mongoose = require('mongoose');
var router = express.Router();

var Schema=Mongoose.Schema;
//
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
//
var personSchema=new Schema({
  id:"",
  teamid:[],
  name:"",
  gender:"",
  phone:0,
  major:"",
  avatarUrl:"",
  categories:"",
  education:"",
  awards:[""],
  skill:[""],
  text:""
})

var groupModel=Mongoose.model("groups",groupSchema);
var personModel=Mongoose.model("person",personSchema);

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
  

});

/* POST group register */
router.post('/db',async function(req,res,next){
  //获取参数
  var query = req.body;
  //为插入的队伍配置teamID
  var maxID=1;
  await groupModel.find({},{'teamID':1},{limit:1,sort:'-teamID'},(err, Comment)=>{
    if(Comment.length==0){
      maxID=1;
    }
    else{
      maxID=Comment[0].teamID+1;
    }
  })
  console.log('post 请求：参数',query);
  query.teamID=maxID;
  groupModel.create(query,function(err){
    
    if(!err){
      console.log('插入group成功');
    }
  })
})

/* POST person message */
router.post('/jianli/write',function(req,res,next){
  //获取参数
  var query = req.body;

  console.log('post 请求：参数',query);
  personModel.create(query,function(err){
    if(!err){
      console.log('插入person成功');
    }
  })
})

module.exports = router;
