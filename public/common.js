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

// public/js/common.js 底部追加

// 获取整个个人名片按钮
const profileBtn = document.getElementById('profile-btn');

// 绑定统一的点击响应
profileBtn.addEventListener('click', () => {
  console.log('点击了个人名片区域！可以在这里写打开个人主页或弹窗的代码');
  // 比如：alert('打开雲上淵的个人中心');
});