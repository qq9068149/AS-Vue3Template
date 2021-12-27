/*
 * @Date: 2021-12-08 14:03:55
 * @LastEditors: xxx
 * @LastEditTime: 2021-12-09 10:35:39
 * @FilePath: \metanovels-wap\src\main.js
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api/api'
import Vant from 'vant'
import 'vant/lib/index.css'
import Utils from '@/utils/utils'

const app = createApp(App)

// vue3全局挂载属性和方法
app.config.globalProperties.$api = Api
app.config.globalProperties.$utils = new Utils()


app.use(router).use(store).use(Vant).mount('#app')
