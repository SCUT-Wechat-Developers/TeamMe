// app.js

let wechat = require('./utils/wechat.js');

App({

  onLaunch() {
    this.getUserInfo();
    
  },
  getUserInfo() {
    //console.log(1);
    wechat.getCryptoData()
      .then(d => {
        
        console.log("get",wechat.getMyOpenid(d).data);
        return wechat.getMyOpenid(d);;//;console.log("get",d);
        
      })

      .then(d => {
        console.log("从后端获取的openid", d.data);
        console.log("从后端获取的openid", d);
        wx.setStorage({
          data: d.data.openid,
          key: 'key',
        })
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
  },


  globalData: {
    userInfo: null,

  }
})
