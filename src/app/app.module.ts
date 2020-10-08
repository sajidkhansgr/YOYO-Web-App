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
import { HeaderModule } from './home-layout/header/header.module';
import { SidebarModule } from './home-layout/sidebar/sidebar.module';
import { FileDndDirective } from './shared/directives/file-dnd.directive';

const appRoutes: Routes = [
    { path : '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path : 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path : 'hub', loadChildren: () => import('./hub/hub.module').then(m => m.HubModule) },
    { path : 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path : 'communication', loadChildren: () => import('./commn/commn.module').then(m => m.CommnModule) },
    { path : 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
    { path : '**', loadChildren: () => import('./errors/404/error-404.module').then(m => m.Error404Module)}
];

@NgModule({
  declarations: [
    AppComponent,
    FileDndDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes),
    HeaderModule, SidebarModule
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
