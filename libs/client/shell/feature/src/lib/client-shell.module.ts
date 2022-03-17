import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@jjmusic-ng-nest/shared/ui/layout';
import { clientShellRoutes } from './client-shell.routes';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(clientShellRoutes, {
      scrollPositionRestoration: 'top'      
    })
  ],
  exports: [RouterModule]
})
export class ClientShellModule {}
