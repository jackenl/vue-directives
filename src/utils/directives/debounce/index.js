// 防抖事件指令
const debounce = {
  install(Vue, options = {
    eventName: 'click',
    time: 1000,
  }) {
    Vue.directive('debounce', {
      bind: function(el, binding) {
        let timer = null;
        el.addEventListener(options.eventName, (e) => {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            binding.value(e);
          }, options.time);
        });
      }
    });
  }
}

export default debounce;
