Page({
    data: {

        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        value1: 0,
    },


    onSwitch1Change({ detail }) {
        console.log('woc')
        console.log(detail)
    }
});