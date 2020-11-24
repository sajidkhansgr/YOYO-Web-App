import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenDataService } from '../../shared/services/token-data.service';
// import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isToken: boolean = false; isVisb: boolean = false;
  @Input() userInfo: any | null;
  // sidebar variables
  temp: string = 'close';
  // header variables
  nav!: any;

  constructor(
    private tokenDataServ: TokenDataService,
    // private dataServ: DataService,
    private router: Router
  ) { }

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

  logout() {
    this.tokenDataServ.removeAll();
    this.nav = null;
    // this.dataServ.passDataSend('change');
  }

  // header
  navbarHandler = () => {
    if (window.screen.width <= 650) {
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
    if (document.querySelector('.sidebar'))
      document.querySelector('.sidebar')!.classList.remove('closeSidebar');
    setTimeout(() => {
      // for text (display)
      for (var i = 0; i < sidebarTexts.length; i++) {
        sidebarTexts[i].classList.remove('displaySidebarText');
      }
      // for arrow (display)
      if (arrow && arrow!.classList)
        arrow!.classList.remove('displayArrow');
    }, 500);
    setTimeout(() => {
      // for text (opacity)
      for (var i = 0; i < sidebarTexts.length; i++) {
        sidebarTexts[i].classList.remove('showSidebarText');
      }
      // for arrow (opacity)
      if (arrow && arrow!.classList)
        arrow!.classList.remove('showArrow');
    }, 5);
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

}
