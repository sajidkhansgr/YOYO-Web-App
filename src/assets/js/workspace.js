let checkWork = 'close';
let checkDoc = 'close';

workspaceToggle = (el) => {
  let id = el.getAttribute('id');
  if (id === 'worksp') {
    document.querySelector('.worksp').style.display = 'block';
    document.querySelector('.document').style.display = 'none';
  } else if (id === 'doc') {
    document.querySelector('.worksp').style.display = 'none';
    document.querySelector('.document').style.display = 'block';
  }
  if (checkWork === 'close' && checkDoc === 'close') {
    workspaceOpen();
    if (id === 'worksp') {
      checkWork = 'open';
    } else if (id === 'doc') {
      checkDoc = 'open';
    }
  } else if (checkWork === 'close' && checkDoc === 'open') {
    if (id === 'worksp') {
      workspaceOpen();
      checkWork = 'open';
    } else if (id === 'doc') {
      workspaceClose();
      checkWork = 'close';
    }
    checkDoc = 'close';
  } else if (checkWork === 'open' && checkDoc === 'close') {
    if (id === 'worksp') {
      workspaceClose();
      checkDoc = 'close';
    } else if (id === 'doc') {
      workspaceOpen();
      checkDoc = 'open';
    }
    checkWork = 'close';
  }
}

// open workspace
workspaceOpen = () => {
  // for view
  document.querySelector('.sub-tab-nav').classList.remove('col-md-12');
  document.querySelector('.sub-tab-nav').classList.add('col-md-6');
  document.querySelector('.sub-tab-nav table').classList.add('hide-rows');
  // search heading
  document.querySelector('.sub-tab-nav .heading .search').classList.remove('col-lg-8', 'col-sm-7');
  document.querySelector('.sub-tab-nav .heading .add-content').classList.remove('col-lg-4', 'col-sm-5');
  document.querySelector('.sub-tab-nav .heading .search').classList.add('col-lg-6');
  document.querySelector('.sub-tab-nav .heading .add-content').classList.add('col-lg-6');
  document.querySelector('.sub-tab-nav .heading .add-content .dropdown').classList.replace('mt-sm-0', 'mt-lg-0');

  // for workspace
  document.querySelector('.workspace').style.display = 'block';
}

// close workspace
workspaceClose = () => {
  // for view
  document.querySelector('.sub-tab-nav').classList.remove('col-md-6');
  document.querySelector('.sub-tab-nav').classList.add('col-md-12');
  document.querySelector('.sub-tab-nav table').classList.remove('hide-rows');
  // search heading
  document.querySelector('.sub-tab-nav .heading .search').classList.remove('col-lg-6');
  document.querySelector('.sub-tab-nav .heading .add-content').classList.remove('col-lg-6');
  document.querySelector('.sub-tab-nav .heading .search').classList.add('col-lg-8', 'col-sm-7');
  document.querySelector('.sub-tab-nav .heading .add-content').classList.add('col-lg-4', 'col-sm-5');

  // for workspace
  document.querySelector('.workspace').style.display = 'none';
}

// edit option
openEdit = (el) => {
  el.parentNode.parentNode.childNodes[3].style.display = 'none';
  el.parentNode.parentNode.childNodes[5].style.display = 'block';
}
closeEdit = (el) => {
  el.parentNode.parentNode.parentNode.parentNode.childNodes[3].style.display = 'block';
  el.parentNode.parentNode.parentNode.parentNode.childNodes[5].style.display = 'none';
}

closeWorkspace = () => {
  workspaceClose();
  checkWork = 'close';
  checkDoc = 'close';
}