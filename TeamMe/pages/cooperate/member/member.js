// pages/square/mission/mission.js

Page({
    data: {

        teamInfo:{},
        missionList:[],
        unfinished:[],  // 未完成列表
        finished: [] , // 完成列表
        indx:1
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
        // 实际上因该为从服务器拉去数据
        let teamInfo = wx.getStorageSync('teamInfo')
        // for( i=1;i<teamInfo.memberinfo.len)
        var theid=wx.getStorageSync("personinf");
        for (var i=1;i<teamInfo.memberinfo.length;i++)
        {
            if(teamInfo.memberinfo[i].openid === theid.openid){
                this.setData({
                    ['missionList']:teamInfo.memberinfo[i].mission,
                    ['teamInfo']:teamInfo
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
        finished=[];
        unfinished=[];
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
      var tet =wx.getStorageSync('openid')
      //  let {missionList} = this.data
      //  let missionId = e.currentTarget.dataset.index
        // 找到对应的任务
    
      //  missionList[missionId].finished = true
        
   //     wx.setStorageSync('personinf', person)
        // 对数据库进行操作,person上传上去
        

        // 更新完之后刷新页面
        //this.loadFun()
        console.log(this.data.teamInfo)
        this.loadFun()
        //console.log(e.currentTarget.dataset.item);
        let indx=0;
        for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
              if (this.data.teamInfo.memberinfo[i].openid == tet) {
                ///this.data.teamInfo.memberinfo.splice(i, 1);
                //success=1;
                 indx=i;
                break
              }
            }
      //let teamId = options.teamId
      //let teamName = options.teamName
      //console.log(teamId)
        
    },
    /**
     * 完成任务
     */
    complete: function (e) {
        console.log(e)
        console.log(this.data.teamInfo)
        console.log(e.currentTarget.dataset.index)
        console.log(this.data.teamInfo)
        //console.log(e.currentTarget.dataset.index)
        var that = this;
        var tet =wx.getStorageSync('openid')
      //  let {missionList} = this.data
      //  let missionId = e.currentTarget.dataset.index
        // 找到对应的任务
    
      //  missionList[missionId].finished = true
        
   //     wx.setStorageSync('personinf', person)
        // 对数据库进行操作,person上传上去
        

        // 更新完之后刷新页面
        //this.loadFun()
        console.log(this.data.teamInfo)

        //console.log(e.currentTarget.dataset.item);
        let indx=0;
        for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
              if (this.data.teamInfo.memberinfo[i].openid == tet) {
                ///this.data.teamInfo.memberinfo.splice(i, 1);
                //success=1;
                 indx=i;

                break
              }
            }
            this.setData({indx})
//console.log(this.data.teamInfo.memberinfo[1])
   //     var len=this.data.teamInfo.memberinfo[indx].missionList[e.currentTarget.dataset.index].length;
  //      console.log(len);
        // var success=0;
            // for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
            //   if (this.data.teamInfo.memberinfo[i].id == e.currentTarget.dataset.item.id) {
            //     this.data.teamInfo.memberinfo.splice(i, 1);
            //     success=1;
            //   }
            // }
        //let personinfo=thispersoninfo.mission[e.currentTarget.dataset.index]
        //down.finished=1;
       // let {teamInfo} = this.data;
       // console.log(this.data.teamInfo)
       // teamInfo.missionList[e.currentTarget.dataset.index].finished=1
       let person = this.data.teamInfo.memberinfo[indx]
       // person.missionList = missionList
       let qwe=this.data.teamInfo;
       let asdf=e.currentTarget.dataset.index;
       //let data_s  = parseInt(asdf)
         console.log(indx)
          console.log(qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished)
         if(e.currentTarget.dataset.finish=="1")qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished=1;//
          else qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished=0;
         console.log(qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished)
          console.log(qwe)
        let azxczx= qwe.memberinfo[indx].mission
        this.setData({
            teamInfo:qwe,
            //missionList:azxczx
        })
        console.log(this.data.teamInfo)
        //this.loadFun()
        //console.log(this.data.teamInfo)
        let {unfinished, finished} = this.data
        finished=[];
        unfinished=[];
        // 完成列表和非完成列表
        for (let i = 0; i < qwe.memberinfo[indx].mission.length; i++) {
            let m = qwe.memberinfo[indx].mission[i]
            if(qwe.memberinfo[indx].mission[i].finished) {
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
    },
    /**
     * 删除任务
     * @param e
     */
    bindDelete (e) {
        console.log(e)
        console.log(this.data.teamInfo)
        console.log(e.currentTarget.dataset.index)
        console.log(this.data.teamInfo)
        //console.log(e.currentTarget.dataset.index)
        var that = this;
        var tet =wx.getStorageSync('openid')
      //  let {missionList} = this.data
      //  let missionId = e.currentTarget.dataset.index
        // 找到对应的任务
    
      //  missionList[missionId].finished = true
        
   //     wx.setStorageSync('personinf', person)
        // 对数据库进行操作,person上传上去
        

        // 更新完之后刷新页面
        //this.loadFun()
        console.log(this.data.teamInfo)

        //console.log(e.currentTarget.dataset.item);
        let indx=0;
        for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
              if (this.data.teamInfo.memberinfo[i].openid == tet) {
                ///this.data.teamInfo.memberinfo.splice(i, 1);
                //success=1;
                 indx=i;
                break
              }
            }

            this.setData({
                indx:indx
            })
//console.log(this.data.teamInfo.memberinfo[1])
   //     var len=this.data.teamInfo.memberinfo[indx].missionList[e.currentTarget.dataset.index].length;
  //      console.log(len);
        // var success=0;
            // for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
            //   if (this.data.teamInfo.memberinfo[i].id == e.currentTarget.dataset.item.id) {
            //     this.data.teamInfo.memberinfo.splice(i, 1);
            //     success=1;
            //   }
            // }
        //let personinfo=thispersoninfo.mission[e.currentTarget.dataset.index]
        //down.finished=1;
       // let {teamInfo} = this.data;
       // console.log(this.data.teamInfo)
       // teamInfo.missionList[e.currentTarget.dataset.index].finished=1
       let person = this.data.teamInfo.memberinfo[indx]
       // person.missionList = missionList
       let qwe=this.data.teamInfo;
    //    let asdf=e.currentTarget.dataset.index;
    //    //let data_s  = parseInt(asdf)
    //    console.log(indx)
       
    //    console.log(qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished)
    //    if(e.currentTarget.dataset.finish=="1")qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished=1;//
    //    else qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished=0;
    //    console.log(qwe.memberinfo[indx].mission[e.currentTarget.dataset.index].finished)
    //    console.log(qwe)
    console.log(e.currentTarget.dataset.index)
        this.data.teamInfo.memberinfo[indx].mission.splice(e.currentTarget.dataset.index, 1);
        this.setData({
            teamInfo:qwe
        })
        console.log(this.data.teamInfo)
        //this.loadFun()
        //console.log(this.data.teamInfo)
        let {unfinished, finished} = this.data
        finished=[];
        unfinished=[];
        // 完成列表和非完成列表
        for (let i = 0; i < qwe.memberinfo[indx].mission.length; i++) {
            let m = qwe.memberinfo[indx].mission[i]
            if(qwe.memberinfo[indx].mission[i].finished) {
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
        //re

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