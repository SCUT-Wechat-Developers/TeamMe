// dist/cards/card/card.js
Page({
  data: {
    person:{}, // 用户
  },
  onLoad: function (){
    console.log(1)
    let {person} = this.data
    person = wx.getStorageSync("personinf")  // 获取点击缓存之后那个候选人的信息

    console.log(person)
    this.setData({
      person
    })
  }


})
