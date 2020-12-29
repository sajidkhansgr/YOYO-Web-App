import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatChipsModule } from '@angular/material/chips';

import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { OfflineInterceptor } from './shared/interceptors/offline.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { CustomUrlSerializer } from './custom-url-serializer';

import { AuthGuard } from './shared/guard/auth.guard';
import { TokenDataService } from './shared/services/token-data.service';
import { DataService } from './shared/services/data.service';
import { HeaderModule } from './home-layout/header/header.module';
import { SidebarModule } from './home-layout/sidebar/sidebar.module';
import { LoaderModule } from './shared/components/loader/loader.module';
import { QuillModule } from 'ngx-quill';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'hub/:id/list', loadChildren: () => import('./hub/hub.module').then(m => m.HubModule), canActivate: [AuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'user/import', loadChildren: () => import('./user/import/import.module').then(m => m.ImportModule), canActivate: [AuthGuard] },
  { path: 'communication', loadChildren: () => import('./commn/commn.module').then(m => m.CommnModule), canActivate: [AuthGuard] },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule), canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule), canActivate: [AuthGuard] },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'share-link/:id', loadChildren: () => import('./share-link/share-link.module').then(m => m.ShareLinkModule) },
  { path: 'web-app', loadChildren: () => import('./web-app/web-app.module').then(m => m.WebAppModule), canActivate: [AuthGuard] },

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./errors/404/error-404.module').then(m => m.Error404Module) }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes),
    HeaderModule, SidebarModule, LoaderModule,
    QuillModule.forRoot(), MatChipsModule // these two added because getting error in shareMail
  ],
  providers: [
    { provide: UrlSerializer, useClass: CustomUrlSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: OfflineInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard, TokenDataService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
