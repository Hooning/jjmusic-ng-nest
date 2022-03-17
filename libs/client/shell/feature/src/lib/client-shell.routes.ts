import { Route } from '@angular/router';
import { LayoutComponent } from '@jjmusic-ng-nest/shared/ui/layout';

export const clientShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
