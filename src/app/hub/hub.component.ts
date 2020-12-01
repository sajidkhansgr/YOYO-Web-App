import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LMT_PAGE } from '../shared/constants';
import { HubService } from './hub.service';
import { Hub } from '../shared/models/hub';
@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  host: {
    class: 'w-100'
  },
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {
  id!: string; routerSubs!: Subscription;
  activeIndex!: number;
  hubInfo!: Hub | null; disabled!: boolean;
  loading!: boolean;lmtPage: Array<number> = LMT_PAGE;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hubServ: HubService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['id']
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    this.disabled = true; this.hubInfo = null;
    this.getHub();
    setTimeout(() => {
      this.activeIndex = 0;
      this.disabled = false;
    }, 900)
    this.loading = true;
  }

  getHub() {
    this.hubServ.viewHub(this.id)
      .subscribe((data: any) => {
        if (data && data.result && data.result.id) {
          this.hubInfo = data.result;
          this.loading = false;
        } else {
          this.toastr.error("invalid Hub")
          this.router.navigate(['/dashboard']);
        }
      }, (err: any) => {
        // this.toastr.error("Unable to fetch hub, so please try after some time")
        this.router.navigate(['/dashboard']);
      });
  }

  onTabChange = (event: any) => {
    this.activeIndex = event.index;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
