import Axios from './request';
import type { TimeResult } from '../tstype/user'

enum API {
  TIME_URL = 'getTime',
  LOGIN_URL = 'login',
  DELETELIST_URL = 'delPersonDynamicList'
}

/**
 * 
 * @returns 获取每日时间
 */
export const apiGetTime = async () => { return Axios.get<any, TimeResult>(API.TIME_URL) }

/**
 * 
 * @param account 账户
 * @param password 密码
 * @returns 获取用户登录信息
 */
export const apiLogin = async (account, password) => { return Axios.post(API.LOGIN_URL, { account, password }) }

/**
 * 
 * @param id 用户id
 * @returns 删除个人动态
 */
export const apidelPersonDynamicList = async (id) => { return Axios.post(API.DELETELIST_URL, { id }) }