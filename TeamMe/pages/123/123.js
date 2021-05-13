//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    int:1,
    infoMess: '',
    userName: '',
    userN:'',
    passWd: '',
    passW:'',
    person:{}
  },
  //用户名和密码输入框事件
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  jumpToRegister:function(){

      wx.navigateTo({
        //url: '/pages/_teamUP/_teamUP',
        url: '/pages/team_regis1/register',
  
      })
    },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  loginBtnClick:function(){
    if(this.data.userN.length == 0 || this.data.passW.length == 0){
      this.setData({
        infoMess:'温馨提示：用户名和密码不能为空！',
      })
    }else{
      this.setData({
        infoMess:'',
        userName:'用户名：'+this.data.userN,
        passWd:'密码：'+this.data.passW
      })
    }
  },
  //重置按钮点击事件
  resetBtnClick:function(e){
    this.setData({
      infoMess: '',
      userName: '',
      userN:'',
      passWd: '',
      passW:'',
    })
  },
  onLoad: function () {
    var theid=wx.getStorageSync("personinf") 
    console.log(1)
  //  console.log(theid)
    this.setData({
      person:theid
    });



    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    console.log(this.data.person)
  }
})