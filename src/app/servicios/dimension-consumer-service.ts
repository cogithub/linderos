import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DimensionConsumerService {
  private baseUrl = 'http://10.1.64.119:6060/api/v1/cube/get';

  constructor(private http: HttpClient) {}

  consumeAll(): Observable<any[]> {
    const requests = [
      this.http.get(`${this.baseUrl}/dimension/`, { params: { f: 'equipment' } }),
      this.http.get(`${this.baseUrl}/dimension/`, { params: { f: 'statusdetail' } }),
      this.http.get(`${this.baseUrl}/zipfact/`, { params: { d: '2025', f: 'statushistory' } })
    ];

    return forkJoin(requests);
  }
}
