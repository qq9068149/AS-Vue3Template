<template>
  <NavBar :title="'书架'"/>
  <div>vuex数据：{{store.state.count}}</div>
  <button type="button" @click="data.count">count is: {{ data.aaa }}</button>
  <Tab />
</template>

<script setup>
import Tab from '@/components/Tab/index.vue'
import NavBar from '@/components/navBar.vue'
import { ref, getCurrentInstance, reactive, onMounted } from 'vue'
import {useStore} from 'vuex'


let data = reactive({
  aaa: 10,
  count: () => {
    data.aaa ++
  }
})

const abc = ref()
onMounted(() => {
  console.log(abc.value)
})

// 使用全局属性和方法app.config.globalProperties
let { proxy } = getCurrentInstance()
proxy.$api.loginAdminTest().then(res => {
  console.log(123)
})
// 使用vuex
const store = new useStore();
</script>
<style lang="less" scoped>
a {
  color: #42b983;
}
</style>
