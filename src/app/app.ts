// archivo: app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class AppComponent {
  estados: string[] = ['READY', 'DELAY', 'STANDBY', 'MAINT', 'OUTOFPLAN'];
  estadoSeleccionado: string = '';
}
