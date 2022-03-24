import { Route } from '@angular/router';
import { LayoutComponent } from '@jjmusic-ng-nest/shared/ui/layout';

export const clientShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
      {
        path: 'about',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
      {
        path: 'music',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
      {
        path: 'gallery',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
      {
        path: 'video',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
      {
        path: 'contact',
        loadChildren: async () =>
          (await import('@jjmusic-ng-nest/client/about/feature/about-list'))
            .ClientAboutFeatureAboutListModule,
      },
    ],
  },
];
