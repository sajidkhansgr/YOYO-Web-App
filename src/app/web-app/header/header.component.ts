import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChngPassComponent } from '../../shared/components/chng-pass/chng-pass.component';
import { TokenDataService } from '../../shared/services/token-data.service';

@Component({
  selector: 'web-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav!: any; // for header
  @Input() userInfo: any | null;

  constructor(
    private modalService: NgbModal,
    private tokenDataServ: TokenDataService
  ) { }

  ngOnInit(): void {
    this.nav = document.querySelector('.toggle-navbar');
    window.addEventListener('resize', () => {
      this.navbarHandler();
    })
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
      }, (reason: any) => {
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
