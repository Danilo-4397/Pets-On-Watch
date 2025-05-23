const links = document.querySelectorAll('.nav-left a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});