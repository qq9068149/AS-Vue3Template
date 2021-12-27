<!--
 * @Date: 2021-12-08 17:46:47
 * @LastEditors: xxx
 * @LastEditTime: 2021-12-09 11:06:52
 * @FilePath: \metanovels-wap\src\components\Tab\index.vue
 * @Description: 
-->
<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#5C48F3"
      inactive-color="#CACBCD"
      safe-area-inset-bottom
      placeholder
      route
    >
      <van-tabbar-item
        replace
        :to="item.path"
        v-for="(item, index) in icon"
        :key="index"
      >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, reactive } from '@vue/reactivity'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const active = ref(0)
const icon = reactive([
  {
    active: proxy.$utils.getSrc('shelf1'),
    inactive: proxy.$utils.getSrc('shelf'),
    title: '书架',
    path: '/',
  },
  {
    active: proxy.$utils.getSrc('bookCity1'),
    inactive: proxy.$utils.getSrc('bookCity'),
    title: '书城',
    path: '/bookCity',
  },
  {
    active: proxy.$utils.getSrc('find1'),
    inactive: proxy.$utils.getSrc('find'),
    title: '发现',
    path: '/welfare',
  },
  {
    active: proxy.$utils.getSrc('my1'),
    inactive: proxy.$utils.getSrc('my'),
    title: '我的',
    path: '/my',
  },
])
</script>

<style lang="less" scoped></style>
