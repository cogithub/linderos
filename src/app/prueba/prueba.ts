import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-basic',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba.html',
  styleUrls: ['./prueba.css'],
})
export class TableBasicComponent {
  pacientes = [
    { nombre: 'Ana', edad: 34, diagnostico: 'Hipertensión' },
    { nombre: 'Luis', edad: 45, diagnostico: 'Diabetes tipo 2' },
    { nombre: 'María', edad: 29, diagnostico: 'Asma' }
  ];
}
 