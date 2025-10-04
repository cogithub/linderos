// archivo: services/estado.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoDetalle } from '../Models/EstadoDetalle'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EstadoService {
  private url = 'http://10.1.64.119:6060/api/v1/cube/get/dimension/?f=statusdetail';

  constructor(private http: HttpClient) {}

  getEstadosUnicosPorTipo(): Observable<EstadoDetalle[]> {
    return this.http.get<EstadoDetalle[]>(this.url).pipe(
      map(estados => {
        const tiposUnicos = new Map<number, EstadoDetalle>();
        estados.forEach(e => {
          if (!tiposUnicos.has(e.idTypeStatus)) {
            tiposUnicos.set(e.idTypeStatus, e);
          }
        });
        return Array.from(tiposUnicos.values());
      })
    );
  }
}
