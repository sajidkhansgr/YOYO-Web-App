togglePages = (el) => {
  let id = el.getAttribute('id');
  let candw = document.querySelector('.content-workspace');
  let tags = document.querySelector('.tags-page');
  let props = document.querySelector('.properties');
  let info = document.querySelector('.info');
  let comments = document.querySelector('.comments');
  el.classList.add('active');


  if (id === 'candw') {
    candw.style.display = 'block';
    tags.style.display = 'none';
    el.parentNode.nextElementSibling.children[0].classList.remove('active');
  } else if (id === 'tags') {
    candw.style.display = 'none';
    tags.style.display = 'block';
    el.parentNode.previousElementSibling.children[0].classList.remove('active');
  }

  if (id === 'props') {
    props.style.display = 'block';
    info.style.display = 'none';
    comments.style.display = 'none';
    el.parentNode.nextElementSibling.children[0].classList.remove('active');
    el.parentNode.nextElementSibling.nextElementSibling.children[0].classList.remove('active');
  } else if (id === 'info') {
    props.style.display = 'none';
    info.style.display = 'block';
    comments.style.display = 'none';
    el.parentNode.nextElementSibling.children[0].classList.remove('active');
    el.parentNode.previousElementSibling.children[0].classList.remove('active');
  } else if (id === 'comments') {
    props.style.display = 'none';
    info.style.display = 'none';
    comments.style.display = 'block';
    el.parentNode.previousElementSibling.children[0].classList.remove('active');
    el.parentNode.previousElementSibling.previousElementSibling.children[0].classList.remove('active');
  }
}