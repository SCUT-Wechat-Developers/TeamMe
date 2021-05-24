// pages/square/mission/mission.js
Page({
    data: {
    //  teamId:"",
    //  teamName:"",
      personinfo:{},
      mission:[]
  
    },
    onLoad: function (options) {
      console.log(options)
      //let teamId = options.teamId
      //let teamName = options.teamName
      //console.log(teamId)
      
      // 初始化队伍的信息
      let personinfo = wx.getStorageSync('teamInfo')
   // for( i=1;i<personinfo.memberinfo.len)
   var theid=wx.getStorageSync("personinf");
    for (var i=1;i<personinfo.memberinfo.length;i++)
        { 
            if(personinfo.memberinfo[i].id === theid.id){
                this.setData({
                    ['mission']:personinfo.memberinfo[i].mission,
                    ['personinfo']:personinfo.memberinfo[i]
                
                })
            }
        }
      console.log(this.data);
    //   this.setData({
    //        personinfo,
    //        teamId,
    //        teamName
    //     //,
    //       //flag=0
    //   })
      //console.log(this.data.teamInfo);
      wx.removeStorageSync('missioninfo')
  
  
    },
    /**
     * 页面的初始数据
     */
    
    complete: function (e) {
        console.log(e)
        console.log(this.data.personinfo)
        console.log(e.currentTarget.dataset.index)
        console.log(e.currentTarget.dataset.index)
        var that = this;
        //console.log(e.currentTarget.dataset.item);
        var len=this.data.personinfo.mission.length;
        console.log(len);
        // var success=0;
            // for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
            //   if (this.data.teamInfo.memberinfo[i].id == e.currentTarget.dataset.item.id) {
            //     this.data.teamInfo.memberinfo.splice(i, 1);
            //     success=1;
            //   }
            // }
        //let personinfo=thispersoninfo.mission[e.currentTarget.dataset.index]
        //down.finished=1;
        var personinfo= this.data.personinfo;
        console.log(this.data.personinfo)
        personinfo.mission[e.currentTarget.dataset.index].finished=1
        this.setData({
            personinfo
        })
    
        //console.log(this.data.personinfo)
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