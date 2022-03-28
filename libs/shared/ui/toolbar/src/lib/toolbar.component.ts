import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'shared-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output()
  sidenavToggle = new EventEmitter<void>();

  currentRoute$ = new BehaviorSubject('/');

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: any) => event.urlAfterRedirects)
      )
      .subscribe((path) => this.currentRoute$.next(path));
  }

  onToggleSidenav(): void {
    console.log('side nav toggled!');
    this.sidenavToggle.emit();
  }
}
