import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  // sidebar variables
  temp: string = 'close';
  // header variables
  nav!: any;
  // workspace variables
  checkWork: string = 'close';
  checkDoc: string = 'close';
  workspDisp: string = 'none';
  docDisp: string = 'none';
  workSecDisp: string = 'none';
  editDisp: string = 'none';
  viewDisp: string = 'block';

  constructor() {

  }

  ngOnInit(): void {
    this.nav = document.querySelector('.toggle-navbar');

    // on resizing the screen
    window.addEventListener('resize', () => {
      // sidebar
      if (window.screen.width <= 768) {
        this.closeSidebar();
      } else {
        this.openSidebar();
      }

      // header
      this.navbarHandler();
    })

    // for smaller screens (sidebar)
    if (window.screen.width <= 768) {
      this.closeSidebar();
    }
    // navbar
    this.navbarHandler();
  }

  // header
  navbarHandler = () => {
    if (window.screen.width <= 600) {
      this.smallScreen();
    } else {
      this.largeScreen();
    }
  }

  // function for opening the sidebar
  openSidebar = () => {
    let sidebarTexts = document.querySelectorAll('.link-text');
    let arrow = document.querySelector('.sidebar .dropdown-toggle');

    // for sidebar (width)
    document.querySelector('.sidebar')!.classList.remove('closeSidebar');


    setTimeout(() => {
      // for text (display)
      for (var i = 0; i < sidebarTexts.length; i++) {
        sidebarTexts[i].classList.remove('displaySidebarText');
      }

      // for arrow (display)
      arrow!.classList.remove('displayArrow');
    }, 500);

    setTimeout(() => {
      // for text (opacity)
      for (var i = 0; i < sidebarTexts.length; i++) {
        sidebarTexts[i].classList.remove('showSidebarText');
      }
      // for arrow (opacity)
      arrow!.classList.remove('showArrow');
    }, 600);

    this.temp = 'close';
  }


  // function for closing the sidebar
  closeSidebar = () => {
    let sidebarTexts = document.querySelectorAll('.link-text');
    let arrow = document.querySelector('.sidebar .dropdown-toggle');

    // for text (opacity)
    for (var i = 0; i < sidebarTexts.length; i++) {
      sidebarTexts[i].classList.add('showSidebarText');
    }

    // for arrow (opacity)
    arrow!.classList.add('showArrow');

    setTimeout(() => {
      // for text (display)
      for (var i = 0; i < sidebarTexts.length; i++) {
        sidebarTexts[i].classList.add('displaySidebarText');
      }

      // for arrow (display)
      arrow!.classList.add('displayArrow');

      // for sidebar (width)
      document.querySelector('.sidebar')!.classList.add('closeSidebar');
    }, 500);

    this.temp = 'open';
  }

  // header for small screen
  smallScreen = () => {
    this.nav!.remove();
    let parent = document.querySelector('.toggle-navbar-bottom')!.children[0];
    if (parent.innerHTML != this.nav.innerHTML) {
      parent.innerHTML = this.nav.innerHTML;
    }
  }

  // header for large screen
  largeScreen = () => {
    let bottomNav = document.querySelector('.toggle-navbar-bottom')!.children[0];
    if (bottomNav.children[0]) {
      for (let i = 0; i < this.nav.children.length; i++) {
        if (bottomNav.children[i]) {
          bottomNav.children[i].remove();
        }
      }
    }
    let parent = document.querySelector('.navbar-collapse');
    if (!parent!.contains(this.nav)) {
      parent!.appendChild(this.nav);
    }
  }

  // on clicking ham icon (sidebar)
  toggleSidebar = () => {
    if (this.temp === 'open') {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }

  // workspace
  workspaceToggle = (event: any) => {
    let id = event.target.id;
    if (id === 'worksp') {
      this.workspDisp = 'block';
      this.docDisp = 'none';
    } else {
      this.workspDisp = 'none';
      this.docDisp = 'block';
    }
    if (this.checkWork === 'close' && this.checkDoc === 'close') {
      this.workspaceOpen();
      if (id === 'worksp') {
        this.checkWork = 'open';
      } else {
        this.checkDoc = 'open';
      }
    } else if (this.checkWork === 'close' && this.checkDoc === 'open') {
      if (id === 'worksp') {
        this.workspaceOpen();
        this.checkWork = 'open';
      } else {
        this.workspaceClose();
        this.checkWork = 'close';
      }
      this.checkDoc = 'close';
    } else if (this.checkWork === 'open' && this.checkDoc === 'close') {
      if (id === 'worksp') {
        this.workspaceClose();
        this.checkDoc = 'close';
      } else {
        this.workspaceOpen();
        this.checkDoc = 'open';
      }
      this.checkWork = 'close';
    }
  }

  // open workspace
  workspaceOpen = () => {
    // for view
    document.querySelector('.sub-tab-nav')!.classList.remove('col-md-12');
    document.querySelector('.sub-tab-nav')!.classList.add('col-md-6');
    document.querySelector('.sub-tab-nav table')!.classList.add('hide-rows');
    // search heading
    document.querySelector('.sub-tab-nav .heading .search')!.classList.remove('col-lg-8', 'col-sm-7');
    document.querySelector('.sub-tab-nav .heading .add-content')!.classList.remove('col-lg-4', 'col-sm-5');
    document.querySelector('.sub-tab-nav .heading .search')!.classList.add('col-lg-6');
    document.querySelector('.sub-tab-nav .heading .add-content')!.classList.add('col-lg-6');
    document.querySelector('.sub-tab-nav .heading .add-content .dropdown')!.classList.replace('mt-sm-0', 'mt-lg-0');

    // for workspace
    this.workSecDisp = 'block';
  }

  // close workspace
  workspaceClose = () => {
    // for view
    document.querySelector('.sub-tab-nav')!.classList.remove('col-md-6');
    document.querySelector('.sub-tab-nav')!.classList.add('col-md-12');
    document.querySelector('.sub-tab-nav table')!.classList.remove('hide-rows');
    // search heading
    document.querySelector('.sub-tab-nav .heading .search')!.classList.remove('col-lg-6');
    document.querySelector('.sub-tab-nav .heading .add-content')!.classList.remove('col-lg-6');
    document.querySelector('.sub-tab-nav .heading .search')!.classList.add('col-lg-8', 'col-sm-7');
    document.querySelector('.sub-tab-nav .heading .add-content')!.classList.add('col-lg-4', 'col-sm-5');

    // for workspace
    this.workSecDisp = 'none';
  }

  // close button on workspace
  closeWorkspace = () => {
    this.workspaceClose();
    this.checkWork = 'close';
    this.checkDoc = 'close';
  }

  // edit options in documents (workspace)
  openEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
    (event.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'block';
  }
  closeEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'block';
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'none';
  }
}
