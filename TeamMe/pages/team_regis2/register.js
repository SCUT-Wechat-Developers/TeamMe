// pages/team_regis2/register.js

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
    wx.setStorageSync("group",this.data.group);
    wx.navigateTo({
      url: '/pages/team_regis3/register',
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