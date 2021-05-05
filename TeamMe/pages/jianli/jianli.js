// pages/jianli/jianli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //name:"",
    _name:"",//杠号是未确认的数据存缓
    // gender:"",
    _gender:"",

    genderNum:0,

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
      name:"",
      gender:"",
      major:"",
      major:"",
      categories:"",
      education:"",
      awards:[""],
      skill:[""],
      text:""
    }

  },

  //用户名和密码输入框事件
  userNameInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _name:e.detail.value
    })
    //console.log(this.data._name);
  },
  passWdInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _gender:e.detail.value
    })
    //console.log(this.data._gender);
  },
  majorInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _major:e.detail.value
    })
    //console.log(this.data._gender);
  },
  categoriesInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _categories:e.detail.value
    })
    //console.log(this.data._gender);
  },
  educationInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _education:e.detail.value
    })
    //console.log(this.data._gender);
  },
  awardsInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _awards:e.detail.value
    })
    //console.log(this.data._gender);
  },
  skillInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _skill:e.detail.value
    })
    //console.log(this.data._gender);
  },
  textInput:function(e){
    //console.log(e);
    //console.log(e.detail.value);
    this.setData({
      _text:e.detail.value
    })
    //console.log(this.data._gender);
  },

  loginBtnClick:function(){
    //console.log(this.data.name);
    var name ="person.name";
    var gender ="person.gender";
    var major ="person.major";
    var categories ="person.categories";
    var education ="person.education";
    var awards ="person.awards";
    var skill ="person.skill";
    var text ="person.text";
    if(this.data._name.length == 0 || this.data._gender.length == 0){
      this.setData({
        infoMess:'温馨提示：用户名和密码不能为空！',
      })
    }else{
      this.setData({
        //infoMess:'',
        [name]:this.data._name,
        [gender]:this.data._gender,
        [major]:this.data._major,
        [categories]:this.data._categories,
        [education]:this.data._education,
        [awards]:this.data._awards,
        [skill]:this.data._skill,
        [text]:this.data._text,
        
      })
      // console.log('名字：'+this.data.name);
      // console.log('性别：'+this.data.gender);
      // console.log('专业：'+this.data.major);
      // console.log('学科：'+this.data.categories);
      // console.log('学历：'+this.data.education);
      // console.log('奖项：'+this.data.awards);
      // console.log('技能：'+this.data.skill);
      // console.log('简介：'+this.data.text);
      wx.setStorageSync("personinf",this.data.person);
      wx.getStorage({
        key: 'personinf',
        success: function(res) {
          console.log(res.data)
        }
       })
    }
  }

})