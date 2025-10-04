// archivo: services/estado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EstadoService {
  private url = 'http://10.1.64.119:6060/api/v1/cube/get/dimension/?f=statusdetail';

  constructor(private http: HttpClient) {}

  getEstadosDesdeCSV(): Observable<any[]> {
    return this.http.get(this.url, { responseType: 'text' }).pipe(
      map(csv => this.parseCSV(csv))
    );
  }

  private parseCSV(csv: string): any[] {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      const obj: any = {};
      headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
      return obj;
    });
  }
}
