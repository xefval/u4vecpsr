import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class CoreModule { }
