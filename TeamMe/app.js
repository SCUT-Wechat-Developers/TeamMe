// app.js

let wechat = require('./utils/wechat.js');
App({

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
        })
        ({
          delta: 1
        });
      }
    })


  },

  onLaunch: function() {
    wechat.getCryptoData()
        .then(d => {
          return wechat.getMyOpenid(d);
        })
        .then(d => {
          console.log("从后端获取的openid", d.data);
          //wx.setStorageSync("personinf",this.data.person);
          wx.setStorageSync(
              "openid",d.data.openid
          )
        })
        .catch(e => {
          console.log(e);
        })



    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    // try {
    //   var value = wx.getStorageSync('key')
    //   if (value) {
    //     // Do something with return value
    //   }
    // } catch (e) {
    //   // Do something when catch error
    // }
    // if(1)getUserInfo();
    wx.getStorage({
          key: 'userinfo',
          success(res){
            //   wx.showModal({
            // title: '123',
            // content: '确认要删除该项吗？',
            // success: function (res) {
            //   if (res.confirm) {  
            //     console.log('点击确认操作')
            //   } else {   
            //     console.log('点击取消操作')
            //   }
            // },
            

            // })
          },
          fail:function (res){
            wx.showModal({
              title: '用户授权',
              content: '获取你的昵称、头像、地区及性别',
              success: function (res) {
                if (res.confirm) {  
                  console.log('点击确认操作')
                  wx.navigateTo({
                    url: '/pages/login/login',
                  })
                } else {   
                  console.log('点击取消操作')
                }
              }
            })
        }
        


      })
      
    },


  globalData: {
    userInfo: null,

  },





  


})
