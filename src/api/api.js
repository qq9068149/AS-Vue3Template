/**请求路径
 * 
 */
import { post } from './request'

export default {
	// 登录
  loginAdminTest: params => {
    return post('/loginAdminTest', params)
  }
}