// index.js
// 获取应用实例

const app = getApp()
import request from "../../../utils/request"

Page({
  data: {
    /**
     * 筛选菜单选项
     */
    dropOption: [
      { text: '微信小程序竞赛', value: 0 },
      { text: '字节跳动杯', value: 1 },
      { text: '全部', value: 2}
    ],  // 下拉筛选项
    dropValue: null,  //默认筛选

    /**
     * 队伍信息
     */
    tagList: [],
    tagIndex: null,
    teamList: [
        // 测试数据
      // {    
      //   teamId:'7',
      //   teamName:'',
      //   teamImg:'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
      //   captain:{},
      //   memberinfo:[],
      //   candidateinfo:[],
      //   title:'',
      //   content:'',
      //   needNum:0,
      //   candidateNum:0,
      //   tag:'',
      //   endTime:'2019-12-3',
      //   updateTime:''
      // },
      {
        captain: '队长1',
        teamId: '0',
        teamName: '队伍1',
        teamImg: 'https://img3.doubanio.com/view/group_topic/l/public/p276827851.webp',
        title: '微信小程序竞赛队友',
        content: '2021微信小程序应用开发赛（以下简称“大赛”）是由清华大学与腾讯公司微信事业群联合主办。',
        needNum: 2,
        candidateNum: 1,
        tag: '微信小程序竞赛',
        endTime: '2021-05-20',
        updateTime: '2021-05-07',
        likeNum: 0,
        isLiked: false
      },
      {
        captain: '队长1',
        teamId: '0',
        teamName: '队伍1',
        teamImg: 'https://img3.doubanio.com/view/group_topic/l/public/p276827851.webp',
        title: '微信小程序竞赛队友',
        content: '2021微信小程序应用开发赛（以下简称“大赛”）是由清华大学与腾讯公司微信事业群联合主办。',
        needNum: 2,
        candidateNum: 1,
        tag: '微信小程序竞赛',
        endTime: '2021-05-20',
        updateTime: '2021-05-07',
        likeNum: 0,
        isLiked: false
      },
      {
        captain: '队长1',
        teamId: '0',
        teamName: '队伍1',
        teamImg: 'https://img3.doubanio.com/view/group_topic/l/public/p276827851.webp',
        title: '微信小程序竞赛队友',
        content: '2021微信小程序应用开发赛（以下简称“大赛”）是由清华大学与腾讯公司微信事业群联合主办。',
        needNum: 2,
        candidateNum: 1,
        tag: '微信小程序竞赛',
        endTime: '2021-05-20',
        updateTime: '2021-05-07',
        likeNum: 0,
        isLiked: false
      },
      
      {
        captain: '队长2',
        teamId: '1',
        teamName: '队伍2',
        teamImg:'',
        title: '混元形意太极门',
        content: '2021微信小程序应用开发赛（以下简称“大赛”）是由清华大学与腾讯公司微信事业群联合主办。',
        needNum: 3,
        candidateNum: 0,
        tag: '字节跳动杯',
        endTime: new Date('2021-05-20'),
        updateTime: '2021-05-07',
        likeNum: 0,
        isLiked: false
      }
    ],  // 队伍
    /**
     * 队伍信息：
     *    队长            captain
     *    ID标签          teamId
     *    队伍名称         teamName
     *    图片            teamImg
     *    标题            title
     *    简介            content
     *    需要人数        needNum
     *    参与候选人数     candidateNum
     *    标签            tag
     *    截止日期         endTime
     *    更新信息日期      updateTime
     *    喜欢（关注的人数） likeNum
     */
    teamInformation: {
      captain: '',
      teamId: '',
      teamName: '',
      teamImg: '',
      title: '',
      content: '',
      needNum: 0,
      candidateNum: 0,
      tag: '',
      endTime: Date,
      updateTime: '',
      likeNum: 0,
      isLiked: false
    },  // 队伍信息
    selectTeamList: [],  // 筛选队伍
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),  // 如需尝试获取用户信息可改为false
    /**
     * 滑动窗口的data
     */
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 1,
    scrollLeft: 0
  },

  // 自定义回调的下拉刷新列表
  handleRefresher () {

  },
  /**
   * 初始化加载函数
   */
  onLoad: function(options) {
    if (wx.getUserProfile) {
      let {dropOption, dropValue} = this.data
      console.log(this.data.selectTeamList)
      this.setData({
        dropValue: dropOption[dropOption.length-1].value,
        canIUseGetUserProfile: true,
        tagList: ['字节跳动杯','微信小程序竞赛']
      })
      // 初始化数据
      // 获取全部队伍的信息
      // this.getAllTeamsData();
    }
  },
  onShow: function () {
    this.tabBar()
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  // async getAllTeamsData() {
  //   let teamListData = await request(url,data,method)  // 请求对应的数据
  //   let index = 0
  //   let teamList =teamListData.allData.map( item => {
  //     item.id = index++
  //     return item
  //   })
  //   if (teamListData) {
  //     this.setData({
  //       teamList
  //     })
  //   }
  // },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   *
   * @param v 选中的value值
   */
  selectTag({detail}) {
    console.log(detail.detail)

    

  
    let option = detail.detail;
    let len = this.data.dropOption.length
    // 点击全部则重置
    if (option === len-1) {
      this.clickReset()
      return
    }
    let {teamList} = this.data
    let selectTeamList = teamList.filter(item =>{
      return item.tag === this.data.dropOption[option].text
    })
    if(selectTeamList.length>=1)
    {
      this.setData({
        selectTeamList
      })
    }else {
      wx.showToast({
        icon: 'none',
        title: '未找到该标签队伍'
      })
    }
  },

  /**
   * @description 查看队伍的详细信息
   * @param event 事件
   */
  detailInformation (event) {
    let tid = event.currentTarget.id // 当前选中的队伍ID
    let teamInformation = this.data.teamList.find(item => {
      return item.teamId === tid
    })
    console.log('队伍的id',tid)
    this.setData({
      teamInformation
    })
    console.log(teamInformation)
    wx.setStorageSync('teamInfo',teamInformation)

    // 跳转到队伍详细页面
    if(tid){
      console.log(tid)
      wx.navigateTo({
        url: '../teamInfo/teamInfo?id='+tid
      })
    }
  },

  // 搜索
  /**
   * 搜索队伍
   * @param e
   */
  searchTeam(e) {
    let tid = e.detail  // 用户搜索的队伍Id
    console.log(typeof (tid))
    let {teamList} = this.data
    let team = teamList.find(item => item.teamId === tid)
    if (team){
      let selectTeamList = [team]
      this.setData({
        selectTeamList,
        dropValue: 1000
      })
    } else {
      wx.showToast({
        title: '未能找到队伍',
        icon: 'none'
      })
    }
    setTimeout(()=>{
      wx.hideLoading();
    },1000)
  },
  // 筛选
  /**
   * 筛选队伍信息
   */
  selectInfo (e) {
    this.showModal(e)
  },
  /**
   * 重置筛选条件按钮
   */
  clickReset () {
    this.setData({
      selectTeamList: []
    })
  },
  /**
   *@description 点击喜欢按钮后
   */
  handleLike (e) {
    let {teamList} = this.data
    if (!teamList[e.currentTarget.id].isLiked){
      teamList[e.currentTarget.id].likeNum++
      teamList[e.currentTarget.id].isLiked = true
    } else {
      teamList[e.currentTarget.id].likeNum--
      teamList[e.currentTarget.id].isLiked = false
    }
    this.setData({
      teamList
    })
    console.log(teamList[e.currentTarget.id].likeNum)
  }
})
