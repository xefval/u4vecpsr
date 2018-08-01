import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { Router, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent, Page404Component],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class CoreModule { }
