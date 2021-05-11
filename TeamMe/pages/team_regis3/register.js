// pages/team_regis3/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    group:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var groupData=wx.getStorageSync('group')
    this.setData({
      group:groupData
    })
  },

  needNumInput:function(e){
    let _num = 'group.needNum';
		// this.setData({
		// 	[_teamImg]:this.data.group.captaininfo.avatarUrl
    // })
   // console.log(this.data.group.teamImg)
   //console.log(e.detail)
    this.setData({
      [_num]:e.detail.value
    })
  },

  jumpToRegister:function(){
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
    wx.navigateTo({
      url: '/pages/_teamUP/_teamUP',
    })
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