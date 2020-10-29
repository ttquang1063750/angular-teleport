import {Directive, ElementRef, Inject, Input, TemplateRef} from '@angular/core';
import {TeleportService} from './teleport.service';

@Directive({
  selector: '[coreTeleport]'
})
export class TeleportDirective {
  @Input('coreTeleport') name: string;
  @Input()
  set activate(activate: boolean) {
    if (activate) {
      this.teleportService.activate(this.name, this.template);
    }
  }

  constructor(
    private teleportService: TeleportService,
    private template: TemplateRef<any>,
  ) {
  }
}
