import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { clientShellRoutes } from './client-shell.routes';
import { LayoutModule } from '@jjmusic-ng-nest/client/shared/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(clientShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class ClientShellModule {}
