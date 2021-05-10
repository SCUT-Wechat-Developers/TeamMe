// pages/login/index.js
Page({
  // handleGetUserInfo(e){
  //   // console.log(e);

  //   const {userInfo}=e.detail;
  //   //console.log(userInfo);
    
  //   wx.setStorageSync("userinfo", userInfo);
  //   wx.navigateBack({
  //     delta: 1
  //   });
      
  // },
  getUserInfo(){

    var that = this;
    wx.getUserProfile({
      desc: '获取你的昵称、头像、地区及性别', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        //console.log(res)
       // console.log(res.userInfo.gender)
        const {userInfo}=res;
        console.log(res);
        wx.setStorageSync("userinfo", userInfo);
        wx.navigateBack({
          delta: 1
        });
      }
    })


  },
  // bingGetOpenID: function() {
  //   wx.login({
  //     success: function(data) {
  //       console.log('获取登录 Code：' + data.code)
  //       var postData = {
  //         code: data.code
  //       };
  //       wx.request({
  //         url: '',//注意改成自己的服务器请求地址哦！http://fetowNew.com/wxApi/wx/getOpenID
  //         data: postData,
  //         method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //         header: {
  //           'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //         },
  //         success: function(res) {
  //           //回调处理
  //           console.log('getOpenID-OK!');
  //           console.log(res.data);
  //         },
  //         fail: function(error) {
  //           console.log(error);
  //         }
  //       })
  //     },
  //     fail: function() {
  //       console('登录获取Code失败！');
  //     }
  //   })
  // }

})