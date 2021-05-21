// pages/index/index.js
Page({
  change: function (e) {
    var that = this;
    //console.log(e);
    console.log(e.currentTarget.dataset.item);
    var len=this.data.teamInfo.memberinfo.length;
    var success=0;
    //this.data.teamInfo.candidateinfo
    // remove: function(array, val) {
    //     return -1;
    //   }
        for (var i = 0; i < this.data.teamInfo.candidateinfo.length; i++) {
          if (this.data.teamInfo.candidateinfo[i].id == e.currentTarget.dataset.item.id) {
            this.data.teamInfo.candidateinfo.splice(i, 1);
            success=1;
          }
        }

    console.log(this.data.teamInfo.candidateinfo);
    console.log(this.data);
    // that.setData({
    //   jid: e.currentTarget.dataset.name,
    //   act_name: e.currentTarget.dataset.act,
    //   act_fee: e.currentTarget.dataset.fee,
    //   mobile: e.currentTarget.dataset.mobile
    // })
    //var theid=wx.getStorageSync("group") 
    //console.log(theid);
    //console.log(this.data.teamInfo.);
    //let newList=  this.data.teamInfo.captaininfo
    if(success){
        let cartList =this.data.teamInfo.memberinfo
        //cartList.push(newList);
        //cartList.push(newList);
        cartList.push(e.currentTarget.dataset.item);
    //console.log(1)
        //console.log(newList)
        //console.log(cartList)
        let key='teamInfo.memberinfo'
        //let key1='group.candidateinfo'
        this.setData({
            [key]: cartList,
            
            })
            console.log(this.data.teamInfo.memberinfo)

        //console.log(this.data.teamInfo.candidateinfo);
        console.log(e);
    }




  },
  // pay_again:function(e){
  //   var that = this;
  //   that.setData({
  //     jid: e.currentTarget.dataset.name,
  //     act_name: e.currentTarget.dataset.act,
  //     act_fee: e.currentTarget.dataset.fee,
  //     mobile: e.currentTarget.dataset.mobile
  //   })
  //   console.log('活动订单id = ' + that.data.mobile);
  // },
  /**
   * 页面的初始数据
   */
  data: {
      flag:1,
      modalName: null,  //   小框显示
      introduction:null,  // 个人简历
      teamInfo: {},       //队伍相关信息
  },
  /**
   * 显示和关闭个人简介小窗
   * @param e
   */
  showModal(e) {
      this.setData({
          modalName:e.currentTarget.dataset.target
      })
  },
  hideModal (e) {
      this.setData({
          modalName: null
      })
  },
  // 监听输入的个人信息
  detailInput (e) {
      this.setData({
          introduction: e.detail.value
      })
  },
  // 保存个人简历
  saveIntroduction () {
      this.setData({
          modalName: null
      })
  },
  // 添加微信
  addWechat: function () {
      wx.previewImage({
          urls: ['http://lblt.site/wx/wx.jpg']
      })
  },
  // 拨打电话
  call: function () {
      wx.makePhoneCall({
          phoneNumber: '13620547041'
      })
  },
  // 添加通讯录
  addPhone: function () {
      wx.addPhoneContact({
          firstName: '海旺',
          lastName: '陈',
          weChatNumber: '13620547041',
          mobilePhoneNumber: '13620547041'
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let teamId = options.id
    console.log(teamId)
    console.log(teamId)
    // 初始化队伍的信息
    let teamInfo = wx.getStorageSync('teamInfo')
    this.setData({
        teamInfo//,
        //flag=0
    })
    console.log(this.data.teamInfo);
    wx.removeStorageSync('teamInfo')


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