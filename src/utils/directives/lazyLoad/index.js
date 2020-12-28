import lazy from './lazy'

// 图片懒加载指令
const lazyLoad = {
  install(Vue, options = {
    defaultSrc: '',
    throttleWait: 200,
  }) {
    Vue.directive('lazy', {
      bind(el, binding) {
        lazy._init(el, binding.value, options.defaultSrc);
      },
      inserted(el) {
        if (IntersectionObserver) {
          lazy._initIntersectionObserver(el);
        } else {
          lazy._initScrollListener(el, options.throttleWait);
        }
      }
    });
  }
}

export default lazyLoad;
