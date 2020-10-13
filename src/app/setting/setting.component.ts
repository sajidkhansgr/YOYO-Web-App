import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { map, filter, mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  activeIndex!: number;
  routerSubs!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("sas")
    this.routerSubs = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.paramMap),
      ).subscribe(
        (paramAsMap) => {
          console.log(this.route.snapshot.firstChild)
          // Get the params (paramAsMap.params) and use them to highlight or everything that meet your need
          this.checkAndGet();
        }
      )
      this.checkAndGet();
  }

  checkAndGet(){
    this.activeIndex = this.route.snapshot.firstChild!.data['type'];
    console.log(this.activeIndex)
  }

  onTabChange(event: any){
    let url = 'account/';
    switch(event.index){
      case 0: this.router.navigate([url+'profile']);break;
      case 1: this.router.navigate([url+'divisions/list']);break;
    }
  }
}
