import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenDataService } from './shared/services/token-data.service';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HiForceAdminUI';
  isToken:boolean = false;isVisb: boolean=false;
  routerSubs: Subscription;
  usrInfo: any | null;

  constructor(
    private tokenDataServ: TokenDataService,
    private dataServ: DataService,
    private router: Router
  ){
    this.routerSubs = this.dataServ.currentInfo
      .subscribe((msg: any) => {
        this.getToken();
      })
  }

  ngOnInit(): void {
    this.getToken();
    setTimeout( ()=>{
      this.isVisb = true;
    },900)
  }

  getToken(){
    this.isToken = this.tokenDataServ.getToken()?true:false;
    let usr = this.tokenDataServ.getUser();
    try{
      if(usr && JSON.parse(usr)){
        this.usrInfo = JSON.parse(usr) || null;
      }else{
        this.usrInfo = null;
      }
    }catch(ex){
      this.usrInfo = null;
    }
  }

  isAuthPage(): boolean{
    return this.router.url.indexOf('auth/login')!==-1||this.router.url.indexOf('login')!==-1?true:false;
  }

  ngOnDestroy(): void{
    // Unsubscribe from all subscriptions
    if(!!this.routerSubs)
      this.routerSubs.unsubscribe();
  }
}
