import request from '@/utils/request'

export function getlist(data) {
  return request({
    url: '/we_service/we_article/list',
    method: 'post',
    data
  })
}

export function play_post(data) {
  return request({
    url: '/we_service/we_article/play_post',
    method: 'post',
    data
  })
}
