<template>
  <div class="index-container">
    <div class="line">
      <button v-copy="'copy'">复制</button>
      <button v-debounce="handleClickDebounce">点击防抖</button>
      <button v-longPress="handleLongPress">长按点击</button>
    </div>
    <ul class="list-group">
      <li class="list-item" v-for="index in count" :key="index">
        <img v-lazy="'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9345d688d43f8794ccf915a4d21b0ef41bd53a31.jpg'" alt="">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 20,
    }
  },
  methods: {
    handleLongPress() {
      console.log('长按点击');
    },
    handleClickDebounce() {
      console.log('点击防抖');
    },
  }
}
</script>

<style lang="less" scoped>
.list-item {
  img {
    width: 500px;
    height: 300px;
  }
}
</style>
