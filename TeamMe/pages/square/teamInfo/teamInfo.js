// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        modalName: null,  //   小框显示
        introduction:null,  // 个人简历
        teamInfo: {},       //队伍相关信息
    },

    joinIn: function (e) {
        
        var that = this;
        console.log(e);
        console.log(e.currentTarget.dataset.item);
        let candidateone=wx.getStorageSync('personinf')
        //console.log(candidateone);
        // candidateone.openid="asdasd"
        // console.log(candidateone);
        var len=this.data.teamInfo.memberinfo.length;
        //console.log(len);

        let success=0;

        // let key='teamInfo'
        // this.setData({
        //     [key]: e.currentTarget.dataset.item
            
        // })
        console.log(this.data.teamInfo);
        //this.data.teamInfo.candidateinfo
        // remove: function(array, val) {
        //     return -1;
        //   }
            for (var i = 0; i < this.data.teamInfo.candidateinfo.length; i++) {
              if (this.data.teamInfo.candidateinfo[i].openid == candidateone.openid) {
                //this.data.teamInfo.candidateinfo.splice(i, 1);
                success=1;
                return 0;
              }
            }
            for (var i = 0; i < this.data.teamInfo.memberinfo.length; i++) {
                if (this.data.teamInfo.memberinfo[i].openid == candidateone.openid) {
                  //this.data.teamInfo.candidateinfo.splice(i, 1);
                  success=1;
                  return 0;
                  
                }
              }
        
        // this.setData({
        //     teamInfo:this.data.teamInfo
        // })
        // //console.log(this.data.teamInfo.candidateinfo);
        // //console.log(this.data);
        // // that.setData({
        // //   jid: e.currentTarget.dataset.name,
        // //   act_name: e.currentTarget.dataset.act,
        // //   act_fee: e.currentTarget.dataset.fee,
        // //   mobile: e.currentTarget.dataset.mobile
        // // })
        // //var theid=wx.getStorageSync("group") 
        // //console.log(theid);
        // //console.log(this.data.teamInfo.);
        // //let newList=  this.data.teamInfo.captaininfo
        //console.log(success)
        if(!success){
            let cartList =this.data.teamInfo.candidateinfo
            //cartList.push(newList);
            //cartList.push(newList);
            cartList.push(candidateone);
        //console.log(1)
            //console.log(newList)
            //console.log(cartList)
            let key='teamInfo.candidateinfo'
            //let key1='group.candidateinfo'
            this.setData({
                [key]: cartList,
                
                })
                console.log(this.data.teamInfo)
    
            //console.log(this.data.teamInfo.candidateinfo);
            //console.log(e);
        }
    
    
    
    
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
    // 监听输入的个人简历
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

    // 申请加入队伍
    // joinIn() {
    //     let ins = this.data;
    //     console.log(ins)
    //     // 传过去到队伍信息
    //     // request
        
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let teamId = options.id
        console.log(teamId)
        //console.log(wx.getStorageSync('teamInfo'))
        // 初始化队伍的信息
        let teamInfo = wx.getStorageSync('teamInfo')
        this.setData({
            teamInfo
        })
        //wx.removeStorageSync('teamInfo')
        
        console.log(this.data.teamInfo)
        //console.log(23)
    },
    onShow: function () {
        let teamId = options.id
        console.log(teamId)
        //console.log(wx.getStorageSync('teamInfo'))
        // 初始化队伍的信息
        let teamInfo = wx.getStorageSync('teamInfo')
        this.setData({
            teamInfo
        })
        wx.removeStorageSync('teamInfo')
        
        console.log(this.data.teamInfo)
        console.log(23)
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