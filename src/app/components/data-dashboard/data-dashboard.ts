import { Component } from '@angular/core';
import { DimensionConsumerService } from '../../servicios/dimension-consumer-service';

@Component({
  selector: 'app-data-dashboard',
  imports: [],
  templateUrl: './data-dashboard.html',
  styleUrl: './data-dashboard.css'
})
export class DataDashboard {
  constructor(private dimensionConsumerService: DimensionConsumerService) {}
}
