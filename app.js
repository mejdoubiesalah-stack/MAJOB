// عداد الأرقام في قسم Hero
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.getAttribute('data-count');
  let count = 0;
  const step = target / 100;
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target;
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(count);
    }
  }, 20);
});

// فتح وإغلاق النوافذ المنبثقة
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('actionDialog').showModal();
  });
});
document.querySelectorAll('[data-close-dialog]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('actionDialog').close();
  });
});
