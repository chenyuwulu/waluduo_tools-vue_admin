import request from '@/utils/request'

export function getindex(data) {
  return request({
    url: '/we_service/ctx/index',
    method: 'post',
    data
  })
}
