const navItems = document.querySelectorAll('.nav > li');

navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });

  item.addEventListener('mouseout', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });
});
