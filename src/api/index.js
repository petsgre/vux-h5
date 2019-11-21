import service from './request'
export function getUserInfo(para) {
  return service({
    url: '/worker/orderInfo/showWorkerInfo',
    params: para,
    method: 'get'
  })
}
export function getOrders(para) {
  return service({
    url: '/worker/orderInfo/showWorkerOrderInfo',
    params: para,
    method: 'get'
  })
}
export function getOrderCount(para) {
  return service({
    url: '/worker/orderInfo/showWorkerOrderCount',
    params: para,
    method: 'get'
  })
}
export function getOrderByStatus(para) {
  return service({
    url: '/worker/orderInfo/getOrderStatus',
    params: para,
    method: 'get'
  })
}
export function acceptOrder(para) {
  return service({
    url: '/worker/orderInfo/acceptOrder',
    params: para,
    method: 'get'
  })
}
export function login(para) {
  return service({
    url: '/worker/orderInfo/login',
    data: para,
    method: 'post'
  })
}
export function finishOrder(para) {
  return service({
    url: '/worker/orderInfo/finishOrder',
    params: para,
    method: 'get'
  })
}
export function uploadPic(para) {
  return service({
    url: '/xcx/xcxIndex/uploadPic',
    data: para,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
