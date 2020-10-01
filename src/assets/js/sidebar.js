// sidebar animation
var temp = 'close';

// function for opening the sidebar
openSidebar = () => {
  let sidebarTexts = document.querySelectorAll('.link-text');
  let arrow = document.querySelector('.sidebar .dropdown-toggle');

  // for sidebar (width)
  document.querySelector('.sidebar').classList.remove('closeSidebar');


  setTimeout(() => {
    // for text (display)
    for (var i = 0; i < sidebarTexts.length; i++) {
      sidebarTexts[i].classList.remove('displaySidebarText');
    }

    // for arrow (display)
    arrow.classList.remove('displayArrow');
  }, 500);

  setTimeout(() => {
    // for text (opacity)
    for (var i = 0; i < sidebarTexts.length; i++) {
      sidebarTexts[i].classList.remove('showSidebarText');
    }
    // for arrow (opacity)
    arrow.classList.remove('showArrow');
  }, 600);

  temp = 'close';
}

// function for closing the icon
closeSidebar = () => {
  let sidebarTexts = document.querySelectorAll('.link-text');
  let arrow = document.querySelector('.sidebar .dropdown-toggle');

  // for text (opacity)
  for (var i = 0; i < sidebarTexts.length; i++) {
    sidebarTexts[i].classList.add('showSidebarText');
  }

  // for arrow (opacity)
  arrow.classList.add('showArrow');

  setTimeout(() => {
    // for text (display)
    for (var i = 0; i < sidebarTexts.length; i++) {
      sidebarTexts[i].classList.add('displaySidebarText');
    }

    // for arrow (display)
    arrow.classList.add('displayArrow');

    // for sidebar (width)
    document.querySelector('.sidebar').classList.add('closeSidebar');
  }, 500);

  temp = 'open';
}

// for smaller screens
if (window.screen.width <= '768') {
  closeSidebar();
}

// on clicking ham icon
toggleSidebar = () => {
  if (temp === 'open') {
    openSidebar();
  } else {
    closeSidebar();
  }
}

// navbar
let nav = document.querySelector('.toggle-navbar');
smallScreen = () => {
  nav.remove();
  let parent = document.querySelector('.toggle-navbar-bottom').children[0];
  console.log(parent.innerHTML);
  if (parent.innerHTML != nav.innerHTML) {
    parent.innerHTML = nav.innerHTML;
  }
}

largeScreen = () => {
  let bottomNav = document.querySelector('.toggle-navbar-bottom')
  if (bottomNav.children[0]) {
    bottomNav = bottomNav.children[0];
  };
  if (bottomNav.children[0]) {
    for (let i = 0; i < nav.children.length; i++) {
      if (bottomNav.children[i]) {
        bottomNav.children[i].remove();
      }
    }
  }
  let parent = document.querySelector('.navbar-collapse');
  if (!parent.contains(nav)) {
    parent.appendChild(nav);
  }
}

if (window.screen.width <= '600') {
  smallScreen();
} else {
  largeScreen();
}

// on resizing the screen
window.addEventListener('resize', () => {
  // sidebar
  if (window.screen.width <= '768') {
    closeSidebar();
  } else {
    openSidebar();
  }

  // navbar
  if (window.screen.width <= '600') {
    smallScreen();
  } else {
    largeScreen();
  }
})
