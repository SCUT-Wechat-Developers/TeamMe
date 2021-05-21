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
      major:"",
      avatarUrl:"",
      categories:"",
      education:"",
      awards:[""],
      skill:[""],
      text:""
    }

  },

  onLoad: function(res1) {
    var theid=wx.getStorageSync("personinf") 
    console.log(1)
  //  console.log(theid)
    this.setData({
      person:theid
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
  phoneInput:function(e){
    this.setData({
      _phone:e.detail.value
    })
  },
  majorInput:function(e){
    this.setData({
      _major:e.detail.value
    })
  },
  categoriesInput:function(e){
    this.setData({
      _categories:e.detail.value
    })
  },
  educationInput:function(e){
    this.setData({
      _education:e.detail.value
    })
  },
  awardsInput:function(e){
    this.setData({
      _awards:e.detail.value
    })
  },
  skillInput:function(e){
    this.setData({
      _skill:e.detail.value
    })
  },
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
      person:{}
      //[phone]: this.data._phone,
      // [major]:this.data._major,
      // [categories]:this.data._categories,
      // [education]:this.data._education,
      // // [awards]:this.data._awards,
      // [awards]:this.data.conLists,
      // [skill]:this.data._skill,
      // [text]:this.data._text,
    })
  },
  loginBtnClick:function(){
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
    var genderNum=wx.getStorageSync("userinfo");
    console.log(genderNum.gender)
    genderNum=genderNum.gender
    var _avatarUrl=wx.getStorageSync("userinfo");
    console.log(_avatarUrl.avatarUrl)
    _avatarUrl=_avatarUrl.avatarUrl
    let phone = 'person.phone';
    // || this.data._gender.length == 0
    // var StorageData = wx.getStorageSync("userinfo")
    // console.log(StorageData)
    //var genderNum = wx.getStorageSync("userinfo")
    var theid=wx.getStorageSync("key") 
    // console.log("getgender",genderNum)
    // wx.getStorage({
    //   key: 'userinfo',
    //   success: function(res) {

    //     console.log(res.data)
    //     genderNum=res.data.gender;
    //     console.log(genderNum)
        
    //   }
    //  })
     
    if(this.data._name.length == 0 ){
      this.setData({
        infoMess:'温馨提示：用户名和学业栏不能为空！'
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
       wx.switchTab({

        url: '/pages/_inf/_inf',
      })
       //上传。
    }
  },


      /**
   * 添加内容
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
   * 删除内容
   */
  del(e) {
    var idx = e.currentTarget.dataset.index;
    var _list = this.data.conLists;
    console.log(idx)
    for (let i = 0; i < _list.length; i++) {
      if (idx == i) {
        _list.splice(idx, 1)
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




