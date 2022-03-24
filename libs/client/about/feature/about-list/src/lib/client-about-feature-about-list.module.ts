import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AboutListComponent } from './about-list.component';

export const clientAboutFeatureAboutListRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutListComponent,
      },
    ]),
  ],
  declarations: [AboutListComponent],
  exports: [AboutListComponent],
})
export class ClientAboutFeatureAboutListModule {}
