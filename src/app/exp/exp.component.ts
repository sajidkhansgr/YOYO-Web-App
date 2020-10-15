import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  temp = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //temporary for static view
  nav!: any; // for header

  constructor() { }

  ngOnInit(): void {
    // header
    this.nav = document.querySelector('.toggle-navbar');
    window.addEventListener('resize', () => {
      this.navbarHandler();
    })
    this.navbarHandler();
  }

  // logout -> this.nav=null;

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
