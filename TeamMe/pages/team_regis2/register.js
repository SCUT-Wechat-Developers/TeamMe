// pages/team_regis2/register.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '基本信息',
      },
      {
        text: '比赛信息',
      },
      {
        text: '组队卡片',
      },
    ],
    group:{},
    items: [
      {name: 'USA', value: '微信小程序', checked: 'true'},
      {name: 'CHN', value: '全国大学生数学建模竞赛'},
      {name: 'BRA', value: '美国大学生数学建模竞赛（MCM/ICM）'},
      {name: 'JPN', value: '大学生挑战杯创业比赛'},
      {name: 'ENG', value: '商赛'},
      {name: 'TUR', value: '其他'},
    ]
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e)
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    // let tag=''
    this.setData({
      ['group.tag']:e.detail.value
    })
  }
  ,
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var groupData=wx.getStorageSync('group')
    this.setData({
      group: groupData
    })
  },

  tagInput:function(e){
    this.setData({
      ['group.tag']:e.detail.value
    })
  },

  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['group.endTime']: e.detail.value
    })
  },

  jumpToRegis3:function(){
    /**
    var stsr= JSON.stringify(this.data.group);
    var weatherObj = JSON.parse(str);
     */
  //   wx.setStorageSync("group",this.data.group);
  //       /*
  //   生成队伍ID，
  //   */
  //  var timestamp = Date.parse(new Date());
  //  var date = new Date(timestamp);
  //  //获取年份  
  //  var Y =date.getFullYear();
  //  //获取月份  
  //  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  //  //获取当日日期 
  //  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
  //  console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' ); 
 
  //   this.setData({
  //     ['group.updateTime']:Y+'-'+M+'-'+D
  //   })
  //    wx.setStorageSync("group",this.data.group);
    //  wx.navigateTo({
    //    //url: '/pages/_teamUP/_teamUP',
    //    url: '/pages/team_regis1/register',
 
    //  })
    wx.switchTab({
      url: '/pages/team_regis1/register',
    })
  },

  needNumInput:function(e){
    this.setData({
      ['group.needNum']:e.detail.value
    })
  },
  jumpToRegister:function(e){
    /*
    生成队伍ID，
    */
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y =date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
    console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' ); 
  
     this.setData({
       ['group.updateTime']:Y+'-'+M+'-'+D
     })
      wx.setStorageSync("group",this.data.group);
    let {group} = this.data
    //console.log()
    let reg = /^\+?[1-9][0-9]*$/　　//正整数
    let flag = reg.test(group.needNum)
    if(!(  group.tag && group.endTime && group.needNum)){
      wx.showToast({
        icon: 'none',
        title: '请补充完整信息'
      })
     }else if (!flag) {
      wx.showToast({
        icon: 'none',
        title: '上限人数信息错误'
      })
    }
    else{  

      //组队成功，把数据传到后台服务器
      var groupMes=this.data.group;
      groupMes.memberinfo=JSON.stringify(this.data.group.memberinfo);
      wx.request({
        method:'post',
        url: 'http://localhost:3500/db',
        data: groupMes,
        header:{'content-type':'application/x-www-form-urlencoded'},
        success:function(res){
          console.log(res);
        }
      })
      wx.navigateTo({

        url: '/pages/_teamUP/_teamUP',
        // url: '/pages/square/index/index',

      /*
      wx.navigateTo({
        url: '/pages/_teamUP/_teamUP'
        // url: '/pages/square/index/index', */


  
      })
      
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})