/**
 * 函数节流
 * @param {function} fn 回调函数 
 * @param {number} wait 节流计时器时间
 */
function throttle(fn, wait) {
  let timer;
  let pre;
  return function(...args) {
    const cur = Date.now();
    const cxt = this;
    if (!pre) pre = cur;
    clearTimeout(timer);

    if (cur - pre > wait) {
      pre = cur;
      fn.apply(cxt, args);
      clearTimeout(timer);
      return;
    }

    timer = setTimeout(() => {
      pre = Date.now();
      timer = null;
      fn.apply(cxt, args);
    }, wait);
  }
}

export default throttle;
