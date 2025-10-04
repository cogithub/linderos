import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZipFactConsumerComponent } from './zip-fact-consumer-component/zip-fact-consumer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZipFactConsumerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estadoSeleccionado:any
  protected readonly title = signal('título para linderos');
}
