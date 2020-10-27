import { Component, OnInit } from '@angular/core';
import { TokenDataService } from '../shared/services/token-data.service';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class WebAppComponent implements OnInit {
  nav!: any; // for header
  usrInfo: any | null;
  constructor(
    private tokenDataServ: TokenDataService
  ) { }

  ngOnInit(): void {
    // header
    this.getToken();
    this.nav = document.querySelector('.toggle-navbar');
    window.addEventListener('resize', () => {
      this.navbarHandler();
    })
    this.navbarHandler();
  }

  getToken() {
    this.usrInfo = this.tokenDataServ.getUser();
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

}
