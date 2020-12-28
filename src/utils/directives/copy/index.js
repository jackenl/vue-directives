import copy from './copy';

export default {
  install(Vue) {
    Vue.directive('copy', copy);
  }
}
