import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

public breadcrumbs: Breadcrumb[];
  private routeUrlSubscription: Subscription;
  private routeEventsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeUrlSubscription = this.route.url.subscribe(d => {
      this.breadcrumbs = this.buildBreadCrumb(this.route.root);
    });

    this.routeEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.buildBreadCrumb(this.route.root);
      }
    });
  }

  ngOnDestroy() {
    this.routeUrlSubscription.unsubscribe();
    this.routeEventsSubscription.unsubscribe();
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
