import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { OfflineInterceptor } from './shared/interceptors/offline.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';

import { AuthGuard } from './shared/guard/auth.guard';
import { TokenDataService } from './shared/services/token-data.service';
import { DataService } from './shared/services/data.service';

const appRoutes: Routes = [
    { path : 'hub', loadChildren: () => import('./hub/hub.module').then(m => m.HubModule) },
    { path : '**', loadChildren: () => import('./errors/404/error-404.module').then(m => m.Error404Module)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: OfflineInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,TokenDataService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
