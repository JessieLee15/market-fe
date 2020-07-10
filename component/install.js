// 组件全局注册
import Vue from 'vue'

import dmTabbar from '@/component/dm-tabbar.vue'//封装共用组件方法一

// 组件库
const Components = [
    dmTabbar
]

// 注册全局组件
Components.map((com) => {
    Vue.component(com.name, com)
})

export default Vue