// pages/square/mission/mission.js
import request from "../../../utils/request";
Page({
    data: {

        teamInfo:{},
        missionList:[],
        unfinished:[],  // 未完成列表
        finished: []  // 完成列表
    },
    // 前端函数
    // 拟态提示窗口
    bindLine() {
        wx.showModal({
            title: '提示',
            content: '左划展开任务操作',
            showCancel: false,
            confirmText: '我知道了'
        })
    },

    // 后端函数
    /**
     * 会经常调用加载函数
     */
    loadFun () {
        // 初始化队伍的信息
        let teamInfo = wx.getStorageSync('teamInfo')
        // for( i=1;i<teamInfo.memberinfo.len)
        var theid=wx.getStorageSync("personinf");
        for (var i=1;i<teamInfo.memberinfo.length;i++)
        {
            if(teamInfo.memberinfo[i].id === theid.id){
                this.setData({
                    ['missionList']:teamInfo.memberinfo[i].mission,
                    ['teamInfo']:teamInfo.memberinfo[i]
                })
            }
        }
        // 赋值missionId
        let {missionList} = this.data
        let len = missionList.length
        for (let i = 0; i < len; i++) {
            missionList[i].missionId = i
        }
        let {unfinished, finished} = this.data
        // 完成列表和非完成列表
        for (let i = 0; i < len; i++) {
            let m = missionList[i]
            if(missionList[i].finished) {
                // 已经完成
                finished.push(m)
            } else {
                unfinished.push(m)
            }
        }
        this.setData({
            finished,
            unfinished
        })
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
     * 页面初始化函数
     * @param options
     */
    onLoad: function (options) {
      console.log(options)
      //let teamId = options.teamId
      //let teamName = options.teamName
      //console.log(teamId)
        this.loadFun()
    },
    /**
     * 完成任务
     */
    complete: function (e) {
        console.log(e)
        console.log(this.data.teamInfo)
        console.log(e.currentTarget.dataset.index)
        console.log(e.currentTarget.dataset.index)
        var that = this;

        let {missionList} = this.data
        let missionId = e.currentTarget.dataset.index
        // 找到对应的任务
        let theMission = missionList.find(item => {
            item.missionId = missionId
        })
        theMission.finished = true
        missionList[missionId] = theMission
        let person = wx.getStorageSync('personinf')
        person.missionList = missionList
        wx.setStorageSync('personinf', person)
        // 对数据库进行操作,person上传上去

        // 更新完之后刷新页面
        this.loadFun()

        //console.log(e.currentTarget.dataset.item);
        var len=this.data.teamInfo.missionList.length;
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
        let {teamInfo} = this.data;
        console.log(this.data.teamInfo)
        teamInfo.missionList[e.currentTarget.dataset.index].finished=1
        this.setData({
            teamInfo
        })
        //console.log(this.data.personinfo)
    },
    /**
     * 删除任务
     * @param e
     */
    bindDelete (e) {
        let that = this
        let {missionList} = this.data
        let missionId = e.currentTarget.dataset.id
        // 删除这个任务
        missionList.splice(parseInt(missionId),1)
        let person = wx.getStorageSync('personinf')
        person.missionList = missionList
        wx.setStorageSync('personinf', person)
        // 对数据库进行操作,person上传上去

        // 更新完之后刷新页面
        this.loadFun()
    },
    /**
     * 取消完成
     * @param e
     */
    bindResetFinish (e) {
        let {missionList} = this.data
        let missionId = e.currentTarget.dataset.id
        // 设置任务回未完成
        missionList[missionId].finished = false
        let person = wx.getStorageSync('personinf')
        person.missionList = missionList
        wx.setStorageSync('personinf', person)
        // 对数据库进行操作，person上传上去

        //更新完之后刷新页面
        this.loadFun()
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