import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from '../models/seance';

@Injectable({
  providedIn: 'root',
})
export class SeancesService {
  private baseUrl = '/seances';

  constructor(private httpClient: HttpClient) {}

  addSeance(seance: Seance): Observable<Seance> {
    return this.httpClient.post<Seance>(`${this.baseUrl}/`, seance);
  }

  getAllSeances(): Observable<Seance[]> {
    return this.httpClient.get<Seance[]>(`${this.baseUrl}/`);
  }

  deleteSeance(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }

  updateSeance(id: string, seance: Seance): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, seance);
  }

  getSeanceById(id: string): Observable<Seance> {
    return this.httpClient.get<Seance>(`${this.baseUrl}/${id}`);
  }
}
