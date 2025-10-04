import { Component, OnInit, Inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
// Update the import path to the correct service file
// Update the import path to the correct service file
// Update the import path to the correct service file
import { DimensionConsumerService } from '../servicios/dimension-consumer.service.ts';



@Component({
  selector: 'app-data-dashboard',
  template: `<div>
    <h2>Data Dashboard</h2>
    <pre>{{ equipment | json }}</pre>
    <pre>{{ statusDetail | json }}</pre>
    <pre>{{ zipFact | json }}</pre>
  </div>`,
  imports: [JsonPipe]
})
export class DataDashboardComponent implements OnInit {
  equipment: any;
  statusDetail: any;
  zipFact: any;

  constructor(@Inject(DimensionConsumerService) private dataConsumer: DimensionConsumerService) {}

  ngOnInit(): void {
    interface Equipment {
      // Define properties based on expected equipment response
      id: number;
      name: string;
      // Add more fields as needed
    }

    interface StatusDetail {
      // Define properties based on expected status detail response
      status: string;
      lastUpdated: string;
      // Add more fields as needed
    }

    interface ZipFact {
      // Define properties based on expected zip fact response
      zipCode: string;
      fact: string;
      // Add more fields as needed
    }

    this.dataConsumer.consumeAll().subscribe({
      next: ([equipmentRes, statusDetailRes, zipFactRes]: [Equipment, StatusDetail, ZipFact]) => {
      this.equipment = equipmentRes;
      this.statusDetail = statusDetailRes;
      this.zipFact = zipFactRes;
      console.log('Datos cargados:', { equipmentRes, statusDetailRes, zipFactRes });
      },
      error: (err: any) => console.error('Error al consumir servicios:', err)
    });
  }
}
