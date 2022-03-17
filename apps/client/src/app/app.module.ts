import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';
import { ClientShellModule } from '@jjmusic-ng-nest/client/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    ClientShellModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
