import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'shared-ui-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent implements OnInit {
  @Output()
  closeSidenav = new EventEmitter<void>();

  currentRoute$ = new Observable<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute$ = this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      tap((event: any) => console.log(event.url)),
      map((event: any) => event['url'])
    );
  }

  onClose(): void {
    this.closeSidenav.emit();
  }
}
