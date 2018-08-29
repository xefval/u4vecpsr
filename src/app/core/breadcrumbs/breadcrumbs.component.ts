import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {

public breadcrumbs: Breadcrumb[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.url.subscribe(d => {
      this.breadcrumbs = this.buildBreadCrumb(this.route.root);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.buildBreadCrumb(this.route.root);
      }
    });
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const path = route && route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;

    if (!route || !route.routeConfig || path === '') {
      if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrl, breadcrumbs);
      }
      return breadcrumbs;
    }

    const breadcrumb = {
      label: route.routeConfig.data['breadcrumb'],
      url: nextUrl
    };

    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
