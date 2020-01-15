import request from '@/utils/request'

export function getlist(data) {
  return request({
    url: '/we_service/we_article/list',
    method: 'post',
    data
  })
}

export function create(data) {
  return request({
    url: '/we_service/we_article/create',
    method: 'post',
    data
  })
}
