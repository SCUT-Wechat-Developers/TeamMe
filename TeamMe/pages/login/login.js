// pages/login/index.js
Page({
  handleGetUserInfo(e){
    // console.log(e);

    const {userInfo}=e.detail;
    //console.log(userInfo);
    wx.setStorageSync("userinfo", userInfo);
    wx.navigateBack({
      delta: 1
    });
      
  },
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

})