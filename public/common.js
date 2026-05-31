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

/* =========================================
   胶囊切换栏 - 流体滑动逻辑
========================================= */
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabSlider = document.querySelector('.tab-slider');

  // 1. 初始化水滴位置 (找到一开始带 active 的按钮并盖住它)
  function initSlider() {
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn && tabSlider) {
      tabSlider.style.width = `${activeBtn.offsetWidth}px`;
      tabSlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
  }

  // 页面刚加载时，先跑一次定位
  initSlider();

  // 2. 监听所有按钮的点击事件
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // 拔掉老按钮的文字高光
      const currentActive = document.querySelector('.tab-btn.active');
      if (currentActive) currentActive.classList.remove('active');

      // 给当前点击的按钮披上文字高光
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');

      // 🌊 核心魔法：让水滴滑块流向当前按钮的位置，并适应它的宽度
      tabSlider.style.width = `${targetBtn.offsetWidth}px`;
      tabSlider.style.transform = `translateX(${targetBtn.offsetLeft}px)`;
    });
  });

  // (可选防护) 如果窗口大小发生变化，重新对齐一下水滴
  window.addEventListener('resize', initSlider);
});