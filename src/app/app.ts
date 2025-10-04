// archivo: app.component.ts

import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoService } from './servicios/EstadoService'; 
import { EstadoDetalle } from './Models/EstadoDetalle'; 
import { FormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class AppComponent {
  estados: EstadoDetalle[] = [];

  constructor(private estadoService: EstadoService) {}

  ngOnInit() {
    this.estadoService.getEstadosUnicosPorTipo().subscribe(data => {
      this.estados = data;
    });
  }
}
