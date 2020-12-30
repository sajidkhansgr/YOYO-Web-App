import { Component, OnInit } from '@angular/core';

import { ExpService } from '../exp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {
  wrkSpcs!: any; loading!: boolean;

  constructor(
    private expServ: ExpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.wrkSpcList();
  }

  // routing function
  changePage(id: number) {
    this.router.navigate(['/web-app/resource/experiences/' + id]);
  }

  wrkSpcList() {
    this.wrkSpcs = [];
    this.expServ.wrkspcListEmp()
      .subscribe((data: any) => {
        if (data && Array.isArray(data.result)) {
          this.wrkSpcs = data.result;
          this.wrkSpcs.sort((a: any, b: any) => a.name.toLowerCase() < b.name.toLowerCase()?-1 : 0);
        }
        this.loading = false;
      }, (err: any) => {
        this.loading = false;
      })
  }
}
