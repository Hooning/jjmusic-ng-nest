import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';

@Component({
  selector: 'shared-ui-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent {
  @Output()
  closeSidenav = new EventEmitter<void>();

  currentRoute$ = new BehaviorSubject(null);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: any) => event.urlAfterRedirects)
      )
      .subscribe((path) => this.currentRoute$.next(path));
  }

  onClose(): void {
    this.closeSidenav.emit();
  }
}
