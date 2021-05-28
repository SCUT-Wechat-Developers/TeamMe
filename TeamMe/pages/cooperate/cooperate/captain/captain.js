// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        flag:1,
        modalName: null,  //   小框显示
        introduction:null,  // 个人简历
        teamInfo: {},       //队伍相关信息
        candidateClick:{}  // 点击的候选人信息
    },
    /**
     * 前端函数
     *
     */
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        })
    },
    hideModal(e) {
        this.setData({
            modalName: null
        })
    },
    // 拟态提示窗口
    bindLine() {
        wx.showModal({
            title: '提示',
            content: '左划展开任务操作',
            showCancel: false,
            confirmText: '我知道了'
        })
    },
    // ListTouch触摸开始
    ListTouchStart(e) {
        this.setData({
            ListTouchStart: e.touches[0].pageX
        })
    },
    // ListTouch计算方向
    ListTouchMove(e) {
        this.setData({
            ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
        })
    },
    // ListTouch计算滚动
    ListTouchEnd(e) {
        if (this.data.ListTouchDirection =='left'){
            this.setData({
                modalName: e.currentTarget.dataset.target
            })
        } else {
            this.setData({
                modalName: null
            })
        }
        this.setData({
            ListTouchDirection: null
        })
    },
    // 跳转到候选人页面
    candidateDetail (e) {
        let {candidateClick} = this.data
        candidateClick = e.currentTarget.dataset.item
        // console.log(candidateClick)
        if(candidateClick) {
            wx.setStorageSync('candidatePerson',candidateClick)
            wx.navigateTo({
                url: '/pages/cooperate/candidateInfo/_teamUP?id='+ candidateClick.openid
            })
        }
    },
    /**
     * 后端函数
     * @param e
     */
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
          if (this.data.teamInfo.candidateinfo[i].openid == e.currentTarget.dataset.item.openid) {
            this.data.teamInfo.candidateinfo.splice(i, 1);
            success=1;
          }
        }
    
    this.setData({
        teamInfo:this.data.teamInfo
    })
    //console.log(this.data.teamInfo.candidateinfo);
    //console.log(this.data);
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
    /**
     * 删除组员
     * @param e
     */
  quit: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.item);
    var len=this.data.teamInfo.memberinfo.length;
    var success=0;
        for (var i = 1; i < this.data.teamInfo.memberinfo.length; i++) {
          if (this.data.teamInfo.memberinfo[i].openid == e.currentTarget.dataset.item.openid) {
            this.data.teamInfo.memberinfo.splice(i, 1);
            success=1;
          }
        }
    this.setData({
        teamInfo:this.data.teamInfo
    })
    // wx.navigateTo({
    //     url: 'pages/square/mission?id='+tid
    //   })
    console.log(this.data.teamInfo)
  },
    /**
     * 拒绝候选人
     * @param e
     */
    deleteCandidate (e) {
        let {teamInfo} = this.data
        let len = teamInfo.candidateinfo.length
        for (let i = 1; i < len; i++) {
            if(teamInfo.candidateinfo[i].openid === e.currentTarget.dataset.item.openid) {
                teamInfo.candidateinfo.splice(i,1)
            }
        }
        this.setData({
            teamInfo
        })
        console.log(teamInfo.candidateinfo)
    },

  mission (event) {
     // console.log(event)
    //let tid = event.currentTarget.id // 当前选中的队伍ID
    let memberOne=event.currentTarget.dataset.item ;
    console.log(event)
    // let teamInformation = this.data.teamList.find(item => {
    //   return item.teamId === tid
    // })
    //console.log('队伍的id',tid)
    // console.log(memberone)
    // this.setData({
    //   teamInformation
    // })
    // console.log(teamInformation)

    wx.setStorageSync('personWithMis',memberOne)
    //var detail1=wx.getStorageSync("detail") 
    //let detail1= wx.getStorage('detail')
    //console.log(detail1);
    console.log(event)
    console.log(123)
    console.log(memberOne.openid)
    wx.navigateTo({
        url: '../mission/mission?id='+memberOne.openid+'&teamId='+this.data.teamInfo.teamID+'&teamName='+this.data.teamInfo.teamName
       // url: '../mission/mission/captain?id='+tid
       // url: '../mission/mission?id='+tid+''
      })
    // 跳转到队伍详细页面
    // if(tid && detail1===2){
    //   console.log(tid)
    //   wx.navigateTo({
    //     url: '../square/teamInfo/teamInfo?id='+tid
    //   })
    // }
    // if(tid && detail1===0){
    //   console.log(tid)
    //   wx.navigateTo({
    //     url: '../square/captain/captain?id='+tid
    //   })
    // }
    // if(tid && detail1===1){
    //   console.log(tid)
    //   wx.navigateTo({
    //     url: '../square/member/member?id='+tid
    //   })
    // }
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

    //console.log(options.i)
    let teamId = options.id
    console.log(teamId)
    console.log(teamId)
    // 初始化队伍的信息
    let teamInfo = wx.getStorageSync('group')
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