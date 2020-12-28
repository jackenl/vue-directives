// 点击复制文本指令
const copy = {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!value) {
        console.log('无复制内容');
        return;
      }
      const textarea = document.createElement('textarea');
      textarea.readOnly = 'readonly';
      textarea.style = {
        position: 'absolute',
        left: '-9999px',
      };
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand('Copy');
      if (result) {
        console.log('复制成功');
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener('click', el.handler);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
};

export default copy;
