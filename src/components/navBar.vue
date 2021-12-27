<!--
 * @Date: 2021-12-09 11:03:22
 * @LastEditors: xxx
 * @LastEditTime: 2021-12-09 16:29:59
 * @FilePath: \metanovels-wap\src\components\navBar.vue
 * @Description: 
-->
<template>
  <van-nav-bar
    :title="title"
    :left-arrow="isLeftArrow"
    fixed
    placeholder
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon :name="rightIcon" />
    </template>
  </van-nav-bar>
</template>

<script setup>
defineProps({
  // 标题
  title: String,
  // 是否显示返回按钮
  isLeftArrow: Boolean,
  // 右侧图标name 例子：ellipsis
  rightIcon: String,
})

const onClickLeft = () => history.back()

const emit = defineEmits(['onClickRight'])
// 右边点击事件
const onClickRight = () => emit('onClickRight')
</script>

<style lang="less" scoped>
:deep(.van-nav-bar) {
  .van-nav-bar__title {
    font-size: 18px;
    color: #212529;
  }
  .van-icon {
    font-size: 18px;
    color: #212529;
  }
}
</style>
