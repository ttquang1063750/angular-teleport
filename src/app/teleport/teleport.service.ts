import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeleportService {
  private teleport = {};

  activate(name: string, template: TemplateRef<object | null>): void {
    const register = this.register(name);
    register.next(template);
  }

  register(name: string): BehaviorSubject<TemplateRef<object | null>> {
    if (!this.teleport[name]) {
      this.teleport[name] = new BehaviorSubject<TemplateRef<object | null>>(null);
    }

    return this.teleport[name];
  }

  connect(name: string): Observable<TemplateRef<object | null>> {
    return this.register(name).asObservable();
  }

  disconnect(name: string): void {
    if (this.teleport[name]) {
      this.teleport[name].complete();
      delete this.teleport[name];
    }
  }
}
