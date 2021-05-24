// pages/team_regis/register.js
var app=getApp();
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
    group:{    
      teamId:'2',
      teamName:'',
      teamImg:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
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
    },


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var theid=wx.getStorageSync("personinf")
    this.captainInput(theid)
    console.log(1)
    
    //console.log(theid)
    //var [captaininfo]={};
    let _captaininfo = 'group.captaininfo';

		this.setData({
			[_captaininfo]:theid
		})
    console.log(this.data.group.captaininfo)

    let newList=  this.data.group.captaininfo
    let cartList =this.data.group.memberinfo
    //cartList.push(newList);
    cartList.push(newList);
    cartList.push(newList);
    console.log(1)
    console.log(newList)
    console.log(cartList)
    let key='group.memberinfo'
    let key1='group.candidateinfo'
    this.setData({
          [key]: cartList,
          [key1]:cartList
        })

  },

  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
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

  captainInput:function(user){
    // var captain ='group.captain'
    let captain ='group.captain'
    this.setData({
      [captain]: {
        id: user.openid,
        nickName: user.nickName,
        avatar: user.avatarUrl
      }
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
    /**
    var stsr= JSON.stringify(this.data.group);
    var weatherObj = JSON.parse(str);
     */
    // 校验
    let {group} = this.data
    if(!(group.captain && group.title && group.teamName && group.content)){
      wx.showToast({
        icon: 'none',
        title: '请补充完整信息'
      })
    }
    else{
    wx.setStorageSync("group",this.data.group);
    wx.navigateTo({
      url: '/pages/publish/team_regis2/register',
    })}
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
    this.tabBar()
  //  var theid=wx.getStorageSync("personinf")
    // this.captainInput(theid)
    // console.log(1)
    
    // //console.log(theid)
    // //var [captaininfo]={};
    // let _captaininfo = 'group.captaininfo';

		// this.setData({
		// 	[_captaininfo]:theid
		// })
    // console.log(this.data.group.captaininfo)

    // let newList=  this.data.group.captaininfo
    // let cartList =this.data.group.memberinfo
    // //cartList.push(newList);
    // cartList.push(newList);
    // cartList.push(newList);
    // console.log(1)
    // console.log(newList)
    // console.log(cartList)
    // let key='group.memberinfo'
    // let key1='group.candidateinfo'
    // this.setData({
    //       [key]: cartList,
    //       [key1]:cartList
          
    //     })
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