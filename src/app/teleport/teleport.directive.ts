import {Directive, ElementRef, Inject, Input, TemplateRef} from '@angular/core';
import {TeleportService} from './teleport.service';

@Directive({
  selector: '[coreTeleport]'
})
export class TeleportDirective {
  @Input('coreTeleport') name: string;

  @Input()
  set coreTeleportActivate(activate: boolean) {
    this.register(activate);
  }

  @Input()
  set activate(activate: boolean) {
    this.register(activate);
  }

  constructor(
    private teleportService: TeleportService,
    private template: TemplateRef<any>,
  ) {
  }

  register(activate: boolean): void {
    if (activate) {
      this.teleportService.activate(this.name, this.template);
    }
  }
}
