import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  input: string = '';

  handleButtonClick(value: string) {
    this.input += value;
  }

  handleCalculate() {
    try {
      this.input = eval(this.input).toString();
    } catch (error) {
      this.input = 'Erro';
    }
  }

  handleClear() {
    this.input = '';
  }
}