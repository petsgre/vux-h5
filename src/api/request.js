import axios from 'axios'
import store from '@/store'
import util from '@/util'
const baseURL = process.env.NODE_ENV === 'production' ? 'api/' : 'dev'
const getToken = () => {
  return window.sessionStorage.getItem('token') || ''
}
// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 5000, // request timeout
  withCredentials: true
  // headers: { 'content-type': 'text/json;charset=UTF-8' }
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // config.headers['content-type'] = 'application/json; charset=utf-8'
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      // console.log(getToken());

    }
    config.headers['token'] = getToken()
    const phone = store.getters.getUserInfo.phone || ''
    const defaultPara = { phone }
    config.params = util.deepExtend({}, defaultPara, config.params)
    config.headers = util.deepExtend({}, config.headers)
    return config
  },
  (error) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // const res = response.data
    // if (res.status.code !== 0) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 1 * 1000
    //   })
    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // 请自行在引入 MessageBox
    //     // import { Message, MessageBox } from 'element-ui'
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject('error')
    // } else {
    // }
    return response.data
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
