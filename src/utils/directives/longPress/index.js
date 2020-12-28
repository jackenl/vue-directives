// 长按指令
const longPress = {
  install(Vue, options = {
    time: 2000,
  }) {
    Vue.directive('longPress', {
      bind: function(el, binding, vNode) {
        // 确保提供的值是函数
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name;            
          let warn = `[longpress:] provided expression '${binding.expression}' is not afunction, but has to be `;
          if (compName) { warn += `Found in component '${compName}' `}
          console.warn(warn);
        }
        let pressTimer = null;
        // 创建计时器
        const start = (e) => {
          if (e.type === 'click' && e.button !== 0) {
            return;
          }
          if (pressTimer === null) {
            pressTimer = setTimeout(() => {
              handler();
            }, options.time);
          }
        }
        // 取消计时器
        const cancel = () => {
          if (pressTimer !== null) {
            clearTimeout(pressTimer);
            pressTimer = null;
          }
        }
        // 运行函数
        const handler = (e) => {
          binding.value(e);
        }

        // 添加事件监听
        el.addEventListener('mousedown', start);
        el.addEventListener('touchstart', start);
        
        el.addEventListener("click", cancel);
        el.addEventListener("mouseout", cancel);
        el.addEventListener("touchend", cancel);
        el.addEventListener("touchcancel", cancel);
      }
    })
  }
}

export default longPress;
