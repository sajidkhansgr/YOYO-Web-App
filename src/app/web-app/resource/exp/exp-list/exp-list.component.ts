import { Component, OnInit } from '@angular/core';

import { ExpService } from '../exp.service';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {
  wrkSpcs!:any;loading!: boolean;

  constructor(
    private expServ: ExpService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.wrkSpcList();
  }

  wrkSpcList(){
    this.expServ.wrkspcListEmp()
      .subscribe( (data: any)=>{
        if (data && Array.isArray(data.result) && data.result.length > 0) {
          this.wrkSpcs = data.result;
        }else{
          this.wrkSpcs = [];
        }
        this.loading = false;
      }, (err:any)=>{
        this.wrkSpcs = [];
        this.loading = false;
      })
  }
}
