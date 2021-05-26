// dist/cards/card/card.js
    },
    likeNumber: Number,
    isShowUnlike: Boolean,
    unlikeNumber: Number,
Page({
  /**
   * 组件的初始数据
   */
  data: {
    steps: [
      {
        text: '基本信息',
      },
      {
        text: '比赛信息',
      },
      {
        text: '组队卡片',
      },
    ],
    group: {}

  },
    /**
     * 加载函数
     */
    onLoad: function (options) {
      let {group} = this.data
      group = wx.getStorageSync('group')
      console.log(group)
      this.setData({
        group
      })
    },
    showMoreText() {
      this.setData({ isMoreText: !this.data.isMoreText });
    },

    handleLike() {
      this.setData({ isLiked: !this.data.isLiked, likeNumber: this.data.likeNumber++ });
      this.triggerEvent('like', {isLiked: this.data.isLiked});
    },

    handleUnlike() {
      this.setData({ isUnliked: !this.data.isUnliked });
      this.triggerEvent('unlike', {isUnliked: this.data.isUnliked});
    },

    handleDelete() {
      this.triggerEvent('delete');
    },
  /**
   * 邀请好友
   */
  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '邀请你加入'+this.data.group.teamName,
          path: '/pages/square/index/index'
        })
      }, 2000)
    })
    return {
      title: '邀请你加入'+this.data.group.teamName,
      path: '/pages/square/index/index',
      promise
    }
  },
  /**
   * 返回广场
   */
  returnToSquare() {
      wx.reLaunch ({
        url: '/pages/square/index/index'
      })
  }

    // ignore the function since the share button be hidden
    // handleShare() {
    //   this.triggerEvent('share');
    // }
})
