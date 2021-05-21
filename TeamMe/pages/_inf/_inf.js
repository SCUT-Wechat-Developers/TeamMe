// pages/user/index.js
Page({
  data: {
    /**
     * @description： 个人信息字段，没有做出特殊声明的都是字符串
     * openid: 确认用户唯一信息的id（微信自带）
     * nickName: 微信用户名（微信自带）
     * avatarUrl: 头像地址 （微信自带）
     * sex: 性别 1：男 0:女 （当然我们同样设置了映射的字段男女字符串） Number
     * name: 真实姓名
     * university： 学校
     * major: 专业
     * categories： 学科
     * education： 学历
     * skill： 技能
     * text: 简介
     * awards: 奖项 Array
     *
     *
     */
    userinfo:{},
    // 被收藏的商品的数量
    collectNums:0
  },

  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },
  onShow(){
    this.tabBar()
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
    //console.log(1); console.log(userinfo);
    //console.log({{personinf.name}});

    this.setData({userinfo,collectNums:collect.length});
      
  },
  /**
   * 处理user信息
   * @param e
   */
  handleGetUserInfo(e){
    // console.log(e);

    const {userInfo}=e.detail;
    //console.log(userInfo);
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1
    });

  },
  /**
   * 获取user信息
   */
  getUserInfo(){
    var that = this;
    wx.getUserProfile({
      desc: '获取你的昵称、头像、地区及性别', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //console.log(res)
        // console.log(res.userInfo.gender)
        const {userInfo}=res;
        wx.setStorageSync("userinfo", userInfo);
        wx.switchTab({
          url: '/pages/square/index/index',
        })({
          delta: 1
        });
      }
    })
  },
  toggle(e) {
    this.getUserInfo()
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }
})