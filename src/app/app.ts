// archivo: app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './servicios/EstadoService';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class AppComponent {
  estados: any[] = [];
  filtro: { [key: string]: string } = {};
  opciones: { [key: string]: string[] } = {};

  constructor(private estadoService: EstadoService) {}

  ngOnInit() {
    this.estadoService.getEstadosDesdeCSV().subscribe(data => {
      this.estados = data;
      this.generarFiltrosUnicos();
    });
  }

  generarFiltrosUnicos() {
    const columnas = [
      'Id main status',
      'Id type status',
      'Id detail status',
      'Main status',
      'Type status',
      'Detail status'
    ];

    columnas.forEach(col => {
      this.opciones[col] = Array.from(new Set(this.estados.map(e => e[col]).filter(v => v)));
      this.filtro[col] = '';
    });
  }

  estadosFiltrados(): any[] {
    return this.estados.filter(e =>
      Object.keys(this.filtro).every(col =>
        !this.filtro[col] || e[col] === this.filtro[col]
      )
    );
  }
}
