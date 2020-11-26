import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ContentWorkspaceService } from '../../hub/content-workspace/content-workspace.service';
import { Content } from '../../shared/models/content';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  routerSubs!: Subscription;
  id!: string; cntnt!: Content | null;
  loading!: boolean;
  leftSide!: boolean; rightSide!: boolean;
  infoToggle!: boolean; enggToggle!: boolean; tagsToggle!: boolean;
  testArr = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cwServ: ContentWorkspaceService
  ) { }

  ngOnInit(): void {
    this.routerSubs = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState() {
    if (this.id != '0') {
      this.loading = true;
      this.leftSide = true; this.rightSide = false;
      this.infoToggle = true; this.enggToggle = true; this.tagsToggle = true;
      this.getCntnt();
    }
  }

  getCntnt() {
    this.cwServ.viewContent(this.id)
      .subscribe((data: any) => {
        // console.log(data, "")
        if (data && data.result && data.result.id) {
          this.cntnt = data.result;
        } else {
          this.cntnt = null
        }
        this.loading = false;
      }, (err: any) => {
        this.cntnt = null;
        this.loading = false;
      })
  }

  ngOnDestroy(): void {
    if (!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }

}
