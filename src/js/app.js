const coll = document.querySelector('.collapse');

coll.addEventListener('click', () => {
  coll.classList.toggle('active');
  const content = document.querySelector('.content');
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});
