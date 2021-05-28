// dist/cards/card/card.js
Page({
  data: {
    candidatePerson:{}, // 候选人（只是那一个人而已）
  },
  onLoad: function (options){
    let {candidatePerson} = this.data
    candidatePerson = wx.getStorageSync("candidatePerson")  // 获取点击缓存之后那个候选人的信息
    this.setData({
      candidatePerson
    })
  }


})
