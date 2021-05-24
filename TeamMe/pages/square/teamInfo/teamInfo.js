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
    joinIn() {
        let ins = this.data;
        console.log(ins)
        // 传过去到队伍信息
        // request
        
    },
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
        wx.removeStorageSync('teamInfo')
        console.log(this.data.teamInfo)
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