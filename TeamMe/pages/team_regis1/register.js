// pages/team_regis/register.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:"",
    group:{    
      teamid:"0",  
      captaininfo:{},
      memberinfo:[],
      candidateinfo:[],
      teamName:'',
      teamImg:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      //captain:'',
      title:'',
      content:'',
      needNum:0,
      //candidateInfo
      tag:'',
      endTime:'',
      updateTime:''

    },


  },
  onLaunch() {
    
    
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var key=wx.getStorageSync("key") 
    // console.log(key);
    // var captainid ="group.captainid";
    // this.setData({
    //   [captainid]:key
    // })
  },

  teamNameInput:function(e){
    var teamName ='group.teamName'
    this.setData({
      [teamName]:e.detail.value
    })
  },

  titleInput:function(e){
    var title ='group.title'
    this.setData({
      [title]:e.detail.value
    })
  },

  captainInput:function(e){
    var captain ='group.captain'
    this.setData({
      [captain]:e.detail.value
    })
  },

  teamImgInput:function(e){
    var teamImg ='group.teamImg'
    this.setData({
      [teamImg]:e.detail.value
    })
  },

  contentInput:function(e){
    var content ='group.content'
    this.setData({
      [content]:e.detail.value
    })
  },

  handleChooseAlbum:function(){
    //系统API，让用户在相册中选择图片（或者拍照）
		wx.chooseImage({
			success : (res) => {
			  //1、取出路径
			  const path = res.tempFilePaths[0]
        this.setData({
          ['group.teamImg']:path
        })
      }
    })
  },

  jumpToRegis2:function(){

    
    var key=wx.getStorageSync("key") 
    console.log(key);
    var captainid ="group.captainid";
    this.setData({
      [captainid]:key
    })
    wx.setStorageSync("group",this.data.group);
    wx.navigateTo({
      url: '/pages/team_regis2/register',
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