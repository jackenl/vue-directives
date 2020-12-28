import copy from './copy';
import debounce from './debounce';
import longPress from './longPress';
import lazyLoad from './lazyLoad';

// 指令集
const directives = {
  copy,
  debounce,
  longPress,
  lazyLoad,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.use(directives[key]);
    });
  }
}
