import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {Router, ActivatedRoute, RouterEvent} from '@angular/router';
import {NAV_ROUTE} from './nav-route';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class MyNavComponent {
  routeTitle: string = '';
  nav_router: Array<any> = NAV_ROUTE;
  subscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
      router.events.subscribe((val: RouterEvent) => {
        for (let i = 0; i < NAV_ROUTE.length; i++) {
          if (NAV_ROUTE[i].routeLink === val.url) {
            this.routeTitle = NAV_ROUTE[i].routeTitle;
          } else if (NAV_ROUTE[i].routeLink === '') {
            for (let j = 0; j < NAV_ROUTE[i].submenu.length; j++) {
              if (NAV_ROUTE[i].submenu[j].routeLink === val.url) {
                this.routeTitle = NAV_ROUTE[i].submenu[j].routeTitle;
              }
            }
          }
        }
      });
  }


    logout() {
      this.authService.logout();
      this.router.navigate(['login']);
    }

    isMatIcon(icon: string) {
        if (icon.startsWith('bw_')) {
            return false;
        }
        return true;
    }
    getIconPath(icon: string) {
        return './assets/img/icon/' + icon.split('bw_')[1] + '.svg';
    }
  }

