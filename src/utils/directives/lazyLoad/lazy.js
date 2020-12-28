import throttle from '../../throttle';

export default {
  // 初始化
  _init(el, val, def) {
    el.setAttribute('data-src', val);
    el.setAttribute('src', def);
  },
  // 初始化IntersectionObserver监听
  _initIntersectionObserver(el) {
    const observe = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src;
      if (entries[0].isIntersecting && realSrc) {
        el.src = realSrc;
        el.removeAttribute('data-src');
      }
    });
    observe.observe(el);
  },
  // 初始化scroll监听
  _initScrollListener(el, throttleWait) {
    const handler = throttle(this.load, throttleWait);
    this.load(el);
    document.addEventListener('scroll', () => {
      handler(el);
    });
  },
  // 加载图片
  load(el) {
    const clientHeight = document.documentElement.clientHeight
      || document.body.clientHeight;
    const rect = el.getBoundingClientRect();
    const realSrc = el.dataset.src;
    if (rect.top - clientHeight < 0 && rect.bottom > 0) {
      if (realSrc) {
        el.src = realSrc;
        el.removeAttribute('data-src');
      }
    }
  }
}