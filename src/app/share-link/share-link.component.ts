import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ShareLinkService } from './share-link.service';
import { DEF_ICON } from '../shared/constants';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ShareLinkComponent implements OnInit {
  id!: string; routerSubs!: Subscription;
  lnkData:any=[];loading:boolean=true;defIcon: any = DEF_ICON;
  showLeft:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private shrLnkServ: ShareLinkService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getLinkData(); // reset and set based on new parameter this time
    });
  }

  getLinkData() {
    this.shrLnkServ.getLinkData(this.id)
      .subscribe((data: any) => {
        console.log(data, 'data');
        if (data && Array.isArray(data.result)) {
          this.lnkData = data.result;
        } else {
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
        // this.toastr.error("Unable to fetch hub, so please try after some time")
      });
  }

  scroll(id: string){
    const element = document.getElementById(id); // id of the scroll to element
    console.log(element, "element",id)
    if(element)
      element.scrollIntoView({behavior: 'smooth'});
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
