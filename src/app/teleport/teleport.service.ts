import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeleportService {
  private registers = {};

  activate(name: string, template: TemplateRef<object | null>): void {
    const register = this.register(name);
    register.next(template);
  }

  register(name: string): BehaviorSubject<TemplateRef<object | null>> {
    if (!this.registers[name]) {
      this.registers[name] = new BehaviorSubject<TemplateRef<object | null>>(null);
    }

    return this.registers[name];
  }

  connect(name: string): Observable<TemplateRef<object | null>> {
    return this.register(name).asObservable();
  }

  disconnect(name: string): void {
    if (this.registers[name]) {
      this.registers[name].complete();
      delete this.registers[name];
    }
  }
}
