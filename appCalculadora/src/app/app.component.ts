import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraActionsComponent } from './calculadora-actions/calculadora-actions.component';
import { CalculadoraViewComponent } from './calculadora-view/calculadora-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraActionsComponent,CalculadoraViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appCalculadora';
}
