// pages/request/request.js
//request.js
Page({
  makeRequest: function() {
    var self = this
    self.setData({loading: true})
    wx.request({
      url:'https://www.v2ex.com/api/topics/show.json?id=520',
    data: {
      noncestr: Date.now()},
    success: function(result) {
      wx.showToast({
        title: '请求成功',icon: 'success',mask: true,
        duration: duration})
        self.setData({loading:false})
        console.log('request success', result)
      },
    fail: function({errMsg}){  
      console.log('request fail' , errMsg)
      self.setData({
        loading:false

      })
    }
    })
  },


  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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