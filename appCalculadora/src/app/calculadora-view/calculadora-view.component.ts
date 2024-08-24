import { Component } from '@angular/core';
import { CalculadoraActionsComponent } from '../calculadora-actions/calculadora-actions.component';

@Component({
  selector: 'app-calculadora-view',
  standalone: true,
  imports: [CalculadoraActionsComponent],
  templateUrl: './calculadora-view.component.html',
  styleUrls: ['./calculadora-view.component.css']
})
export class CalculadoraViewComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  setResultado(event: { operacion: string }): void {
    const { operacion } = event;
    switch (operacion) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;
      case '^':
        this.resultado = Math.pow(this.numero1, this.numero2);
        break;
      case '√':
        this.resultado = Math.sqrt(this.numero1);
        break;
    }
  }

  setNumero1(event: any): void {
    this.numero1 = +event.target.value;
  }

  setNumero2(event: any): void {
    this.numero2 = +event.target.value;
  }

  limpiarValores(): void {
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
