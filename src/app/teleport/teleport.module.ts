import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeleportDirective} from './teleport.directive';
import {TeleportComponent} from './teleport/teleport.component';


@NgModule({
  declarations: [
    TeleportDirective,
    TeleportComponent,
  ],
  exports: [
    TeleportDirective,
    TeleportComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class TeleportModule {
}
