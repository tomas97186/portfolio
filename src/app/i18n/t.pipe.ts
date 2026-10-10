import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18n, Text } from './i18n.service';

// Impure: devono ricalcolarsi quando cambia la lingua, anche se l'input è lo stesso oggetto

@Pipe({ name: 't', standalone: true, pure: false })
export class TPipe implements PipeTransform {
  private i18n = inject(I18n);

  transform(value: Text): string;
  transform(value: Text[]): string[];
  transform(value: Text | Text[]): string | string[] {
    return Array.isArray(value) ? value.map(v => this.i18n.t(v)) : this.i18n.t(value);
  }
}

@Pipe({ name: 'month', standalone: true, pure: false })
export class MonthPipe implements PipeTransform {
  private i18n = inject(I18n);

  transform(value: string | null): string {
    return this.i18n.month(value);
  }
}
