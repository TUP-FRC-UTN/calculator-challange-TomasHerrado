import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora-actions',
  standalone: true,
  templateUrl: './calculadora-actions.component.html',
  styleUrls: ['./calculadora-actions.component.css']
})
export class CalculadoraActionsComponent {
  @Input() numero1: number = 0;
  @Input() numero2: number = 0;
  @Output() calcularEvent = new EventEmitter<{ operacion: string }>();
  @Output() limpiarEvent = new EventEmitter<void>();

  operar(operacion: string) {
    this.calcularEvent.emit({ operacion });
  }

  limpiar() {
    this.limpiarEvent.emit();
  }
}
