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

/* GET group message */
router.get('/square',async function(req,res,next){
  let groups=await groupModel.find({},(err,Comment)=>{
    console.log(Comment);
  })
  for(let i=0;i<groups.length;i++){
      groups[i].memberinfo=JSON.parse(groups[i].memberinfo);
  }
  console.log(groups);
  res.send(groups);
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

router.post("/openid", async (req, res) => {
    console.log('openid来了')
    const Ut = require("../comment/utils");
    try {
        console.log(req.body);
        let appId = "wx84f6c451fa65662b";
        let secret = "0ee1141d3ac767aea1ff858cd10922e4";
        let { js_code } = req.body;
        let opts = {
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
        }
        let r1 = await Ut.promiseReq(opts);
        r1 = JSON.parse(r1);
        console.log(r1);
        res.json(r1);

        console.log('搞定了')
    }
    catch (e) {
        console.log(e);
        res.json('');
    }
})


module.exports = router;
