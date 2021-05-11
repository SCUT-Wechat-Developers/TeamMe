// pages/user/index.js
Page({
  data: {
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
      
  }
})