import { Component, OnInit, Inject } from '@angular/core';
import { ZipFactService } from '../servicios/dimension-consumer';
import { forkJoin } from 'rxjs';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-zip-fact-consumer',
  template: `
    <div *ngIf="isLoading">Cargando datos...</div>
    <div *ngIf="error">{{ error }}</div>
    <div *ngIf="!isLoading && !error">
      <h3>ZipFact Data</h3>
      <pre>{{ zipFactData | json }}</pre>
      <h3>Equipment Data</h3>
      <pre>{{ equipmentData | json }}</pre>
      <h3>Status Detail Data</h3>
      <pre>{{ statusDetailData | json }}</pre>
    </div>
  `,
  imports: [CommonModule, JsonPipe],
  // styleUrls: ['./zip-fact-consumer.component.css']
})
export class ZipFactConsumerComponent implements OnInit {
  zipFactData: any[] = [];
  equipmentData: any[] = [];
  statusDetailData: any[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private zipFactService: ZipFactService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.isLoading = true;
    this.error = null;

    forkJoin({
      zipFact: this.zipFactService.getZipFactData(),
      equipment: this.zipFactService.getEquipmentData(),
      statusDetail: this.zipFactService.getStatusDetailData()
    }).subscribe({
      next: ({ zipFact, equipment, statusDetail }) => {
        this.zipFactData = zipFact ?? [];
        this.equipmentData = equipment ?? [];
        this.statusDetailData = statusDetail ?? [];
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al consumir los datos: ' + err.message;
        this.isLoading = false;
      }
    });
  }
}