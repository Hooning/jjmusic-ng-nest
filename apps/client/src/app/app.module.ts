import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@jjmusic-ng-nest/shared/utils/material';
import { ClientShellModule } from '@jjmusic-ng-nest/client/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule, MaterialModule, ClientShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
