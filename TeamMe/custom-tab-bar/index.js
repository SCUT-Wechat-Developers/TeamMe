// custom-tab-bar/index.js
Component({
    properties: {},
    data: {
        //当前高亮项
        selected: 0,
        //tabBar页面数据
        tabList: [
            {
                "pagePath": "pages/square/index/index",
                "text": "广场"
            },
            {
                "pagePath": "pages/_cooperate/_cooperate",
                "text": "协作"
            },
            {
                "pagePath": "pages/team_regis1/register",
                "text": "发布"
            },
            {
                "pagePath": "pages/_inf/_inf",
                "text": "我"
            }
        ]
    },
    attached: function() {},
    methods: {
        //底部切换
        switchTab(e) {
            let key = Number(e.currentTarget.dataset.index);
            let tabList = this.data.tabList;
            let selected= this.data.selected;

            if(selected !== key){
                this.setData({
                    selected:key
                });
                wx.switchTab({
                    url: `/${tabList[key].pagePath}`,
                })
            }
        },
    }
})