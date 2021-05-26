// index.js
// 获取应用实例

const app = getApp()
import request from "../../../utils/request"

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    // 队伍名称
    myTeamList: [{
      title: '队伍名称1',
      name: '比赛1',
      color: 'cyan',
      icon: 'newsfill'
    },
      {
        title: '队伍名称1',
        name: '比赛2',
        color: 'blue',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: '比赛3',
        color: 'purple',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: '比赛4',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: '比赛5',
        color: 'pink',
        icon: 'btn'
      },
      {
        title: '标签',
        name: '比赛6',
        color: 'brown',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        icon: 'loading2'
      },
    ],
    // option1: [
    //   { text: '我是组长', value: 0 },
    //   { text: '我是组员', value: 1 }
    //   //{ text: '活动商品', value: 2 },
    // ],
    // // option2: [
    // //   { text: '默认排序', value: 'a' },
    // //   { text: '好评排序', value: 'b' },
    // //   { text: '销量排序', value: 'c' },
    // // ],
    // value1: 0,
    //value2: 'a',

    /**
     * 筛选菜单选项
     */
    dropOption: [
      { text: '我是组长', value: 0 },
      { text: '我是组员', value: 1 },
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

  bindViewTap(e){
    //console.log(1);
    console.log(e.detail);
  },

  // 自定义回调的下拉刷新列表
  handleRefresher () {

  },
  /**
   * 初始化加载函数
   */
  onLoad: function(options) {
    wx.setStorage({
      data: 2,
      key: 'detail',
    })
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
    
    var theid=wx.getStorageSync("group") 
    console.log(theid);
    let cartList =this.data.teamList;
    theid.memberinfo[0].id="oFwNE5bSgwt_QJaXT1zVTs8CiS7A";
    theid.memberinfo[1].id="2";
    
    theid.candidateinfo[0].id="3";
    theid.candidateinfo[1].id="4";
    //theid.memberinfo[0].name="asdas啊啊啊";
    theid.candidateinfo[1].name="啊啊啊";
    theid.candidateinfo[1].gender=0;
    //theid.title="";
    cartList.push(theid);
    
    let key='teamList'
    this.setData({
          [key]: cartList
        })
    //theid.teamId="6";


    let theid1=wx.getStorageSync("group") 
    console.log(theid1);
    let cartList1 =this.data.teamList;
    //let teamId=this.data.teamList
    cartList.push(theid1);
    theid1.memberinfo[0].id="2";
    //theid1.memberinfo[1].id="oFwNE5bSgwt_QJaXT1zVTs8CiS7A";
    theid1.memberinfo[1].mission=[{
      content:"jvhdfhdhf",
      deadline:"2020-11-22",
      finished:Boolean,
      
      teamId:"6"
    },
    {
      content:"干饭啊",
      deadline:"2020-11-22",
      finished:Boolean,
      
      teamId:"6"
    },
    {
      content:"干饭啊萨达萨达萨达萨达",
      deadline:"2020-11-22",
      finished:Boolean,
      
      teamId:"6"
    }
  ]
    console.log()
    theid1.memberinfo[1].id="oFwNE5bSgwt_QJaXT1zVTs8CiS7A";
    theid1.candidateinfo[0].id="7";
    theid1.candidateinfo[1].id="8";
    theid1.teamId="6";
    theid1.title="非组长，组员";
    let key1='teamList'
    this.setData({
          [key1]: cartList1
        })
    console.log(this.data.teamList);

    // var theid=wx.getStorageSync("group") 
    // console.log(theid);
    // let cartList =this.data.teamList;
    // cartList.push(theid);
    // let key='teamList'
    // this.setData({
    //       [key]: cartList
    //     })
    // console.log(this.data.teamList);




  },
  onShow: function () {
    this.tabBar()
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  // 筛选窗口右滑弹出
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
    wx.setStorage({
      data: detail.detail,
      key: 'detail',
    })
    let option = detail.detail
    let len = this.data.dropOption.length
    // 点击全部则重置
    if (option === len-1) {
      this.clickReset()
      return
    }
    let {teamList} = this.data
    //var theid= wx.getStorage("personinf")
    var theid=wx.getStorageSync("personinf");
    //console.log(77)
    //console.log(theid)
    let selectTeamList;
    if(!detail.detail){
      selectTeamList = teamList.filter(item =>{
      return item.memberinfo[0].id === theid.id
      })
    }
    else{
      selectTeamList = teamList.filter(item =>{
        console.log("item.memberinfo.length") ;
        var flag=0

        console.log(item.memberinfo.length) ;
        for (var i=1;i<item.memberinfo.length;i++)
        { 
            if(item.memberinfo[i].id === theid.id)flag=1;
        }
        return flag;
      })
    }
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
    var detail1=wx.getStorageSync("detail") 
    //let detail1= wx.getStorage('detail')
    console.log(detail1);
    // 跳转到队伍详细页面
    if(tid && detail1===2){
      console.log(tid)
      wx.navigateTo({
        url: '../../square/teamInfo/teamInfo?id='+tid
      })
    }
    if(tid && detail1===0){
      console.log(tid)
      wx.navigateTo({
        url: '../../cooperate/captain/captain?id='+tid
      })
    }
    if(tid && detail1===1){
      console.log(tid)
      wx.navigateTo({
        url: '../../cooperate/member/member?id='+tid
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
