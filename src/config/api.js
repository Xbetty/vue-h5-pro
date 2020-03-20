import { request } from './request'

// 登录
export const apiLogin = params =>
  request('/ac-common/oauth/mkt/sms/stu', params, 'post')
