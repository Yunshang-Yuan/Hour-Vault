const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 监听点击事件
themeToggleBtn.addEventListener('click', () => {
  // 检查当前是不是深色模式
  if (htmlElement.getAttribute('data-theme') === 'dark') {
    // 如果是深色，就移除标记，变回浅色
    htmlElement.removeAttribute('data-theme');
  } else {
    // 如果是浅色，就加上标记，变成深色
    htmlElement.setAttribute('data-theme', 'dark');
  }
});