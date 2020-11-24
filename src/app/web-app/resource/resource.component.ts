import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  navLinks: any[]= [
        {
            label: 'Workspaces',
            link: '/web-app/resource/experiences',
            index: 0
        }, {
            label: 'Collections',
            link: '/web-app/resource/collections',
            index: 1
        }, {
            label: 'My Files',
            link: '/web-app/resource/my-files',
            index: 2
        }];
  // activeLinkIndex = -1;
  // routerSubs!: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.routerSubs = this.router.events.subscribe((res) => {
    //     this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    // });
  }

  ngOnDestroy(): void {
    // this.routerSubs.unsubscribe();
  }

}
