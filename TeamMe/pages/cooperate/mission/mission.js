// pages/square/mission/mission.js
Page({
  data: {
    teamId:"",
    teamName:"",
    personinfo:{},
    mission:{
        content:"",
        deadline:"",
        finished:Boolean,
        
        teamId:""

    }

  },
  onLoad: function (options) {
    console.log(options)
    let teamId = options.teamId
    let teamName = options.teamName
    console.log(teamId)
    
    // 初始化队伍的信息
    let personinfo = wx.getStorageSync('missioninfo')
    console.log(personinfo)
    this.setData({
         personinfo,
         teamId,
         teamName
      //,
        //flag=0
    })
    //console.log(this.data.teamInfo);
    wx.removeStorageSync('missioninfo')


  },
  /**
   * 页面的初始数据
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
          if (this.data.teamInfo.candidateinfo[i].id == e.currentTarget.dataset.item.id) {
            this.data.teamInfo.candidateinfo.splice(i, 1);
            success=1;
          }
        }
    
    this.setData({
        teamInfo:this.data.teamInfo
    })

    if(success){
        let cartList =this.data.teamInfo.memberinfo
        cartList.push(e.currentTarget.dataset.item);
        let key='teamInfo.memberinfo'
        this.setData({
            [key]: cartList,
            
            })
            console.log(this.data.teamInfo.memberinfo)
        console.log(e);
    }
  },

  mission: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.item);
    var len=this.data.teamInfo.memberinfo.length;
    var success=0;
        for (var i = 1; i < this.data.teamInfo.memberinfo.length; i++) {
          if (this.data.teamInfo.memberinfo[i].id == e.currentTarget.dataset.item.id) {
            this.data.teamInfo.memberinfo.splice(i, 1);
            success=1;
          }
        }
    this.setData({
        teamInfo:this.data.teamInfo
    })

    console.log(this.data.teamInfo)
  },

  bindDateChange: function(e) {
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ['mission.deadline']: e.detail.value
    })
   // console.log(this.data.mission)
  },
  needNumInput:function(e){
  console.log(this.data)
    this.setData({
      ['mission.content']:e.detail.value
    })
    
  },

  jumpToRegister:function(e){
    //console.log(this.data);
    this.setData({
      ['mission.teamId']:this.data.teamId,
      ['mission.finished']:0
    })
    //console.log(this.data);

    if(!(this. data.mission.content &&this.data. mission.deadline )){
      wx.showToast({
        icon: 'none',
        title: '请补充完整信息'
      })
      }//else if (!flag) {
    //   wx.showToast({
    //     icon: 'none',
    //     title: '上限人数信息错误'
    //   })
    // }
    else{  
      console.log(this.data.personinfo)
      let permission=this.data.personinfo.mission
      // let permission = JSON.parse(JSON.stringify(this.data.personinfo.mission));
      // console.log(permission == this.data.personinfo.mission) //false  通过json方法复制后的地址不一样
      // console.log(permission);

      let missionone=this.data.mission
      // let missionone = JSON.parse(JSON.stringify(this.data.mission));
      // console.log(missionone == this.data.mission) //false  通过json方法复制后的地址不一样
      // console.log(missionone);

      permission.push(missionone);

      console.log(this.data.personinfo)
      
      let key='personinfo.mission'
      this.setData({
            [key]: permission
          })
      console.log(this.data.personinfo)
      
      //组队成功，把数据传到后台服务器
      // wx.request({
      //   method:'post',
      //   url: 'http://localhost:3500/db',
      //   data: this.data.group,
      //   header:{'content-type':'application/x-www-form-urlencoded'},
      //   success:function(res){
      //     console.log(res);
      //   }
      // })
      wx.setStorageSync('missioninfo',this.data.personinfo)
      // wx.navigateTo({
      //   url: '../mission/mission?id='+this.data.personinfo.id+'&teamId='+this.data.teamId+'&teamName='+this.data.teamName
      // })
    }
  },

  jump:function(e){
    // wx.navigateTo({
    //   url: '../captain/captain?id='+this.data.teamId
    // })
    wx.switchTab({
      url: '/pages/_cooperate/_cooperate',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */


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