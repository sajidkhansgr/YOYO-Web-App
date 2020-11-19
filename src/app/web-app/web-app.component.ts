import { Component, OnInit } from '@angular/core';
import { TokenDataService } from '../shared/services/token-data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChngPassComponent } from '../shared/components/chng-pass/chng-pass.component';

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
  userInfo: any | null;
  constructor(
    private tokenDataServ: TokenDataService,
    private modalService: NgbModal,
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
    this.userInfo = this.tokenDataServ.getUser();
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

  openModal() {
    this.modalService.open(ChngPassComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result
      .then((result: any) => {
        console.log(`Closed with: ${result}`);
      }, (reason: any) => {
        console.log(`Dismissed ${(reason)}`);
      });
  }

  disMissMdodal() {
    if (this.modalService)
      this.modalService.dismissAll();
  }

  ngOnDestroy(): void {
    this.disMissMdodal();
  }

}
