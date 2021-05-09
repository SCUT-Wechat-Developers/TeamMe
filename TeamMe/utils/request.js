//  发送request请求
import config from './config'

/**
 *
 * @param url
 * @description 路由地址，不需要带上服务器的baseUrl
 * @param data
 * @description 数据
 * @param method
 * @description 方法
 * @returns {Promise<unknown>}
 */
export default (url, data={}, method='GET') => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: config.host + url,
            data,
            method,
            success: (res) => {
                console.log('请求成功', res)
                resolve(res.data)
            },
            fail: (err)=> {
                console.log('请求失败', err)
                reject(err)
            }
        })
    })
}