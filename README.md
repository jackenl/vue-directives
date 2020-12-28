## Vue  指令集

### 复制指令

点击触发复制v-copy的值

```js
// 全局注册
import copy from '/$path/copy/index'
Vue.use(copy)

// 局部注册
import copy from '$path/copy/copy'
Vue.directive('copy', copy)
```

```html
<button v-copy="'文本'">复制</button>
```

### 长按点击指令

长按点击，规定时间段后触发v-longPress的值回调函数

```js
// 全局注册
import longPress from '$path/longPress'
Vue.use(longPress, options = {
	time: 2000, // 长按时长
})
```

```html
<button v-longPress="handleLongPress">长按点击</button>
```

### 防抖指令

防止连续触发事件，通过函数防抖防止用户频繁操作

```js
// 全局注册
import debounce from '$path/debounce'
Vue.use(debounce, options = {
	eventName: 'click', // 防抖事件名称
	time: 1000, // 防抖时间间隔
})
```

```html
<button v-debounce="handleClickDebounce">点击防抖</button>
```

### 图片懒加载指令

当图片元素出现在视图窗口时，替换默认加载图片，加载显示真实图片

```js
// 全局注册
import lazyLoad from '$path/lazyLoad'
Vue.use(lazyLoad, options = {
	defaultSrc: 'https://baidu.com/xxx.jpg', // 默认加载图片
	throttleWait: 200, // 滚动事件回调节流时间间隔
})
```

```html
<ul class="list-group">
  <li class="list-item" v-for="index in count" :key="index">
    <img v-lazy="'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9345d688d43f8794ccf915a4d21b0ef41bd53a31.jpg'" alt="">
  </li>
</ul>
```

