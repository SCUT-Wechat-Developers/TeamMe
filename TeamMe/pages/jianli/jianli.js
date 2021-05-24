// pages/jianli/jianli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //name:"",
    _name:"",//杠号是未确认的数据存缓
    // gender:"",
    _gender:"男",
    _phone:0,
    conLists: [],
    genderNum:0,
    _avatarUrl:"",
    major:"",
    _major:"",
    categories:"",
    _categories:"",
    education:"",
    _education:"",
    university:"",
    _university:"",

    educationLevel:0,

   // awards:[""],
    _awards:"",
    _skill:"",
    text:"",
    _text:"",
    person:{
      id:"",
      teamid:[],
      name:"",
      gender:"",
      phone:0,
      mission:[{}],
      major:"",
      avatarUrl:"",
      categories:"",
      education:"",
      awards:[""],
      skill:[""],
      text:"",
      university:""
    }

  },

  onLoad: function(res1) {
   
    var theid=wx.getStorageSync("personinf") 
    console.log(1)
  //  console.log(theid)
    this.setData({
      person:theid,
      _name:theid.name,//杠号是未确认的数据存缓
      //conLists: theid.conLists,
      //genderNum:theid.person.gender,
      //_avatarUrl:theid.person.avatarUrl,

      _major:theid.major,
      _categories:theid.categories,
      _education:theid.education,
      _university:theid.education,
     // awards:[""],
      //_awards:theid.person.,
      _skill:theid.skill,
      //text:"",
      _text:theid.text,
    });


     
  },
  // 姓名输入
  userNameInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _name:e.detail.value
    })
    //console.log(this.data._name);
  },
  // 性别输入 0为女 1为男
  sexChange(e){
    let genderNum = e.detail.value;
    let _gender = genderNum ? '男': '女'
    this.setData({
      // gender:gender
      _gender,
      genderNum
    })
  },
  // 输入大学
  universityInput:function (e) {
    this.setData({
      university: e.detail.value
    })
  },
  // 专业输入
  majorInput:function(e){
    // var openid=wx.getStorageSync("openid") 
    
    // this.setData({
    //   id:openid
    // })
    // console.log(this.data)
    this.setData({
      _major:e.detail.value
    })
  },
  // 学科输入
  categoriesInput:function(e){
    this.setData({
      _categories:e.detail.value
    })
  },
  // 学历输入
  educationInput:function(e){
    this.setData({
      _education:e.detail.value
    })
  },
  // 技能输入
  skillInput:function(e){
    this.setData({
      _skill:e.detail.value
    })
  },
  // 简介输入
  textInput:function(e){
    this.setData({
      _text:e.detail.value
    })
  },

  // 全部信息清除，重置
  resetBtnClick:function(e){
    console.log(1);
    //this.onLoad()
    this.setData({
      _gender:'',
      genderNum: null,
      _name:'',
      _phone:'',
      _major:'',
      _categories:'',
      _education:'',
      _skill:'',
      _text:'',
      conLists: [],
      person:{},
      university:''
    })
  },

  // 确认修改信息按钮
  confirmBtnClick:function(){
    var name ="person.name";
    var gender ="person.gender";
   // var phone ="person.phone";
    var id ="person.id";
    var major ="person.major";
    var categories ="person.categories";
    var education ="person.education";
    var awards ="person.awards";
    var skill ="person.skill";
    var text ="person.text";
    var avatarUrl="person.avatarUrl";
    var university="person.university";
    var genderNum=wx.getStorageSync("userinfo");
    console.log(genderNum.gender)
    genderNum=genderNum.gender
    var _avatarUrl=wx.getStorageSync("userinfo");
    console.log(_avatarUrl.avatarUrl)
    _avatarUrl=_avatarUrl.avatarUrl
    let phone = 'person.phone';
    var theid=wx.getStorageSync("openid")
    if((this.data._name.length == 0 ) ||
    (this.data._major.length == 0 ) ||
    (this.data._categories.length == 0 ) ||
    (this.data.university.length == 0 ) ||
    (this.data._education.length == 0 ) 
    ){
      this.setData({
        infoMess:'温馨提示：用户名和学业栏不能为空！',
      })
    } else{
      this.setData({
        [name]:this.data._name,
        [avatarUrl]:_avatarUrl,
        [id]:theid,
        [gender]:genderNum,
        [phone]: this.data._phone,
        [major]:this.data._major,
        [categories]:this.data._categories,
        [education]:this.data._education,
        // [awards]:this.data._awards,
        [awards]:this.data.conLists,
        [skill]:this.data._skill,
        [text]:this.data._text,
        [university]: this.data.university
      })
      // console.log('名字：'+this.data.name);
      // console.log('性别：'+this.data.person.gender);

      wx.setStorageSync("personinf",this.data.person);
      wx.getStorage({
        key: 'personinf',
        success: function(res) {
          console.log(res.data)
        }
       })
      wx.request({
        method:'post',
        url: 'http://localhost:3500/jianli/write',
        data: this.data.person,
        header:{'content-type':'application/x-www-form-urlencoded'},
        success:function(res){
          console.log(res);
        }
      })
       wx.switchTab({

        url: '/pages/_inf/_inf',
      })
       //上传。
    }
  },
      /**
   * 添加奖项
   */
  add(e) {
    // 点击添加按钮，就往数组里添加一条空数据
    var _list = this.data.conLists;
    _list.push("")
    this.setData({
      conLists: _list
    })
  },
  /**
   * 删除奖项
   */
  del(e) {
    var idx = e.currentTarget.dataset.index;
    var _list = this.data.conLists;
    console.log(idx)
    for (let i = 0; i < _list.length; i++) {
      if (idx == i) {
        _list.splice(i, 1)
      }
    }
    this.setData({
      conLists: _list
    })
  },

  /**
  * 获取输入的内容标题
  */
  changeConTitle(e) {
    var idx = e.currentTarget.dataset.index; //当前下标
    var val = e.detail.value; //当前输入的值
    var _list = this.data.conLists; //data中存放的数据
    for (let i = 0; i < _list.length; i++) {
      if (idx == i) {
         _list[i] =  val//{ modelLabel: } //将当前输入的值放到数组中对应的位置
      }
    }
    this.setData({
      conLists: _list
    })
  },

  /**
  * 下一步
  */
  next(e) {
    var _conLists = this.data.conLists;
    console.log('这是模板内容标题数组', _conLists)
    for (let i = 0; i < _conLists.length; i++) {
      if (!_conLists[i]) {
        wx.showToast({
          title: '请输入第' + `${i * 1 + 1}` + '条的模板内容标题！',
          icon: 'none'
        })
        return;
      }
    }
  }
})




