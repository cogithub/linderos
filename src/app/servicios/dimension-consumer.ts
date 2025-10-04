import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipFactService {
  private baseUrl = 'http://10.1.64.119:6060/api/v1/cube/get';

  zipFactData: any;

  constructor(private zipFactService: ZipFactService, private http: HttpClient) {}

  /**
   * Obtiene los datos de zipfact para el año 2025 con el filtro statushistory.
   * @returns Observable con los datos de la respuesta
   */
  getZipFactData(): Observable<any> {
    const params = new HttpParams()
      .set('d', '2025')
      .set('f', 'statushistory');

    return this.http.get(`${this.baseUrl}/zipfact`, { params });
  }

  /**
   * Obtiene los datos de la dimensión equipment.
   * @returns Observable con los datos de la respuesta
   */
  getEquipmentData(): Observable<any> {
    const params = new HttpParams()
      .set('f', 'equipment');

    return this.http.get(`${this.baseUrl}/dimension`, { params });
  }

  /**
   * Obtiene los datos de la dimensión statusdetail.
   * @returns Observable con los datos de la respuesta
   */
  getStatusDetailData(): Observable<any> {
    const params = new HttpParams()
      .set('f', 'statusdetail');

    return this.http.get(`${this.baseUrl}/dimension`, { params });
  }
}