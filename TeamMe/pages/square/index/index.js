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
      { text: '微信小程序', value: 0 },
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
      {
        captain: '队长1',
        teamID: '0',
        teamName: '队伍123',
        teamImg: 'https://img3.doubanio.com/view/group_topic/l/public/p276827851.webp',
        title: '微信小程序竞赛队友',
        content: '\n' +
            '\n' +
            '维基百科（英语：Wikipedia，英语音标：/ˌwɪkᵻˈpiːdiə/ 或 /ˌwɪkiˈpiːdiə/），总部位于美国，是一个基于维基技术的多语言百科全书式的协作计划，是用多种语言编写而成的网络百科全书。维基百科由非营利组织维基媒体基金会负责营运，维基百科接受捐... ',
        needNum: 2,
        candidateNum: 1,
        tag: '微信小程序竞赛',
        endTime: new Date('2021-05-20'),
        updateTime: '2021-05-07',
        //isLiked:0,
        likeNum: "2",
        memberAvatar:["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231005548,635944634&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231005548,635944634&fm=26&gp=0.jpg"]
      },
      {
        captain: '队长1',
        teamID: '1',
        teamName: '队伍1',
        teamImg: 'https://img3.doubanio.com/view/group_topic/l/public/p276827851.webp',
        title: '微信小程序竞赛队友',
        content: '\n' +
            '\n' +
            '维基百科（英语：Wikipedia，英语音标：/ˌwɪkᵻˈpiːdiə/ 或 /ˌwɪkiˈpiːdiə/），总部位于美国，是一个基于维基技术的多语言百科全书式的协作计划，是用多种语言编写而成的网络百科全书。维基百科由非营利组织维基媒体基金会负责营运，维基百科接受捐... ',
        needNum: 2,
        candidateNum: 1,
        tag: '微信小程序竞赛12312312313',
        endTime: new Date('2021-05-20'),
        updateTime: '2021-05-07',
        likeNum:  "1",
        //isLiked:1,
        memberAvatar:["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg", "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231005548,635944634&fm=26&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231005548,635944634&fm=26&gp=0.jpg"]
      }
        // 测试数据
    ],  // 队伍
    /**
     * 队伍信息：
     *    ID标签          teamID
     *    队伍名称         teamName
     *    比赛名称         title
     *    简介            content
     *    需要人数        needNum
     *    参与候选人数     candidateNum
     *    比赛类型            tag
     *    截止日期         endTime
     *    更新信息日期      updateTime
     *    队员信息列表         memberinfo
     *    候选人信息列表      candidateinfo
     *    喜欢的人数         likeNum
     *
     */
    teamInformation: {
      captain: '',
      teamID: '',
      teamName: '',
      title: '',
      content: '',
      needNum: 0,
      candidateNum: 0,
      tag: '',
      endTime: Date,
      updateTime: '',
      likeNum: 0,
      memberInfo: {},
      candidateInfo: {},
      memberAvatar:[]  // 方便获取头像，无需存入数据库
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
      // this.getAllTeamsData()
      wx.request({
        method:'get',
        url: 'http://localhost:3500/square',
        success:(res)=>{
          //res.memberInfo=JSON.parse('res.memberInfo');
          console.log(res.data);
          this.setData({
            teamList:res.data
          })

        }
      })
    }
//增加//
    var theid=wx.getStorageSync("group") 
    console.log(theid);
    let cartList =this.data.teamList;
    theid.teamId="8";
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
    theid1.memberinfo[1].openid="oFwNE5bSgwt_QJaXT1zVTs8CiS7A";
    theid1.candidateinfo[0].id="7";
    theid1.candidateinfo[1].id="8";
    theid1.teamId="6";
    theid1.title="非组长，组员";
    let key1='teamList'
    this.setData({
          [key1]: cartList1
        })
    console.log(this.data.teamList);

    
  },

  onShow: function () {
          wx.request({
        method:'get',
        url: 'http://localhost:3500/square',
        success:(res)=>{
          //res.memberInfo=JSON.parse('res.memberInfo');
          //res.candidateInfo=JSON.parse('res.candidateInfo');
          console.log(3)
          console.log(res);
          this.setData({
            teamList:res.data
          })
          console.log(this.data.teamList)
          let per=wx.getStorageSync('personinf')
          //console.log(teamList[e.currentTarget.id])
          //per.followList.push(teamList[e.currentTarget.id])
          //console.log(per)
          // var that = this;
          // //console.log(e);
          // console.log(e.currentTarget.dataset.item);
          // var len=this.data.teamInfo.memberinfo.length;
          //let key=per.followList;
          var success=1;
          //this.data.teamInfo.candidateinfo
          // remove: function(array, val) {
          //     return -1;
          //   }
      
          console.log(this.data)
          console.log(1)
          for (var i = 0; i < this.data.teamList.length; i++) {
            this.data.teamList[i].likeNum="0";
            console.log(this.data.teamList[i])
            let key='teamList'
            //console.log(key)
              this.setData({
                  [key]: this.data.teamList
                  
              })
            //console.log(this.data.teamList)
            for (var j = 0; j < per.followList.length; j++) {
            if (this.data.teamList[i].teamID == per.followList[j].teamID) {
              //this.data.teamInfo.candidateinfo.splice(i, 1);
              //success=1;
              //if(per.followList[j].)
              this.data.teamList[i].likeNum="1";
              //let u=teamList
              let key='teamList'
              this.setData({
                  [key]: this.data.teamList
                  
              })
              // this.setData({
              //   teamList
              // })
              
            }
            
          }//console.log(this.data.teamList[i])
          }
        }
      })
    //  console.log(3)
    let per=wx.getStorageSync('personinf')
    //console.log(teamList[e.currentTarget.id])
    //per.followList.push(teamList[e.currentTarget.id])
    //console.log(per)
    // var that = this;
    // //console.log(e);
    // console.log(e.currentTarget.dataset.item);
    // var len=this.data.teamInfo.memberinfo.length;
    //let key=per.followList;
    var success=1;
    //this.data.teamInfo.candidateinfo
    // remove: function(array, val) {
    //     return -1;
    //   }

    //console.log(this.data)
    console.log("qwe")
    for (var i = 0; i < this.data.teamList.length; i++) {
      this.data.teamList[i].likeNum="0";
      console.log(this.data.teamList[i])
      let key='teamList'
      //console.log(key)
        this.setData({
            [key]: this.data.teamList
            
        })
      console.log(this.data.teamList)
      for (var j = 0; j < per.followList.length; j++) {
      if (this.data.teamList[i].teamID == per.followList[j].teamID) {
        //this.data.teamInfo.candidateinfo.splice(i, 1);
        //success=1;
        //if(per.followList[j].)
        this.data.teamList[i].likeNum="1";
        //let u=teamList
        let key='teamList'
        this.setData({
            [key]: this.data.teamList
            
        })
        // this.setData({
        //   teamList
        // })
        
      }
      
    }console.log(this.data.teamList[i])
    }
    console.log(13)
    
    // this.setData({
    //     teamInfo:this.data.teamInfo
    // })
    // //console.log(this.data.teamInfo.candidateinfo);
    // //console.log(this.data);
    // // that.setData({
    // //   jid: e.currentTarget.dataset.name,
    // //   act_name: e.currentTarget.dataset.act,
    // //   act_fee: e.currentTarget.dataset.fee,
    // //   mobile: e.currentTarget.dataset.mobile
    // // })
    // //var theid=wx.getStorageSync("group") 
    // //console.log(theid);
    // //console.log(this.data.teamInfo.);
    // //let newList=  this.data.teamInfo.captaininfo
    // if(success){
    //     let cartList =this.data.teamInfo.memberinfo
    //     //cartList.push(newList);
    //     //cartList.push(newList);
    //     cartList.push(e.currentTarget.dataset.item);
    // //console.log(1)
    //     //console.log(newList)
    //     //console.log(cartList)
    //     let key='teamInfo.memberinfo'
    //     //let key1='group.candidateinfo'
    //     this.setData({
    //         [key]: cartList,
            
    //         })
    //         console.log(this.data.teamInfo.memberinfo)

    //     //console.log(this.data.teamInfo.candidateinfo);
    //     console.log(e);
    // }



    // if(success)per.followList.push(teamList[e.currentTarget.id])

    // wx.setStorageSync('personinf',per)
    //res
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
    let option = detail.detail
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
    //console.log(event)
    let tid = event.currentTarget.id // 当前选中的队伍ID
    //console.log(event)
    let teamInformation = this.data.teamList.find(item => {
      return item.teamID == tid
    })
    console.log('队伍的id',tid)
    this.setData({
      teamInformation
    })
    //console.log(teamInformation)
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
    console.log(tid)

    let {teamList} = this.data
    console.log(this.data.teamList[1])
    let team;
   
    //let team = teamList.find(item => item.teamID === tid)
    for (var i=0;i<teamList.length;i++)
    { 
        if(this.data.teamList[i].teamID == tid){
          team=this.data.teamList[i];
          break;
        }
    }
    

    console.log(team)

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
   * 需要访问服务器操作
   */
  handleLike (e) {
    console.log(e)
    let {teamList} = this.data
    if (teamList[e.currentTarget.id-1].likeNum=="0"){
      //teamList[e.currentTarget.id].likeNum++
      teamList[e.currentTarget.id-1].likeNum = "1"
    } else {
      //teamList[e.currentTarget.id].likeNum--
      teamList[e.currentTarget.id-1].likeNum = "0"
    }
    this.setData({
      teamList
    })
    console.log(this.data.teamList[e.currentTarget.id-1].likeNum)

    let per=wx.getStorageSync('personinf')
    console.log(teamList[e.currentTarget.id-1])
    //per.followList.push(teamList[e.currentTarget.id])
    //console.log(per)
    // var that = this;
    // //console.log(e);
    // console.log(e.currentTarget.dataset.item);
    // var len=this.data.teamInfo.memberinfo.length;
    let success=1;
    //this.data.teamInfo.candidateinfo
    // remove: function(array, val) {
    //     return -1;
    //   }
        for (var i = 0; i < per.followList.length; i++) {
          if (per.followList[i].teamID == e.currentTarget.id) {
            //this.data.teamInfo.candidateinfo.splice(i, 1);
            success=0;
          }
        }
        console.log(success)
    if(success) {
      per.followList.push(teamList[e.currentTarget.id-1])}
    // eles{
    //   success=0;   ;
    //   }
    if(success==0) {
      for (var i = 0; i < per.followList.length; i++) {
        if (per.followList[i].teamID == e.currentTarget.id) {
          per.followList.splice(i, 1);
          // let key='teamList'
          // this.setData({
          //     [key]: this.data.teamList
              
          // })
          //success=0;
        }
      }
    }
    wx.setStorageSync('personinf',per)
    // this.setData({
    //     teamInfo:this.data.teamInfo
    // })
    // //console.log(this.data.teamInfo.candidateinfo);
    // //console.log(this.data);
    // // that.setData({
    // //   jid: e.currentTarget.dataset.name,
    // //   act_name: e.currentTarget.dataset.act,
    // //   act_fee: e.currentTarget.dataset.fee,
    // //   mobile: e.currentTarget.dataset.mobile
    // // })
    // //var theid=wx.getStorageSync("group") 
    // //console.log(theid);
    // //console.log(this.data.teamInfo.);
    // //let newList=  this.data.teamInfo.captaininfo
    // if(success){
    //     let cartList =this.data.teamInfo.memberinfo
    //     //cartList.push(newList);
    //     //cartList.push(newList);
    //     cartList.push(e.currentTarget.dataset.item);
    // //console.log(1)
    //     //console.log(newList)
    //     //console.log(cartList)
    //     let key='teamInfo.memberinfo'
    //     //let key1='group.candidateinfo'
    //     this.setData({
    //         [key]: cartList,
            
    //         })
    //         console.log(this.data.teamInfo.memberinfo)

    //     //console.log(this.data.teamInfo.candidateinfo);
    //     console.log(e);
    // }




    //res

  

}
})
