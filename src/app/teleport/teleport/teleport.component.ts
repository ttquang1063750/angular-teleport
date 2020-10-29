import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {TeleportService} from '../teleport.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'core-teleport',
  templateUrl: './teleport.component.html',
  styleUrls: ['./teleport.component.scss'],
})
export class TeleportComponent implements OnInit {
  template$: Observable<TemplateRef<object | null>>;
  @Input() context: object | null = null;
  @Input() name: string;

  constructor(private teleportService: TeleportService) {
  }

  ngOnInit(): void {
    this.template$ = this.teleportService.connect(this.name);
  }
}
