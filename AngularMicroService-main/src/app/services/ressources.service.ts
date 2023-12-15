// Ressource.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressource } from '../models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private apiUrl = '/resources';

  constructor(private http: HttpClient) {}

  getAllRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(`${this.apiUrl}/`);
  }

  addRessource(Ressource: Ressource): Observable<Ressource> {
    return this.http.post<Ressource>(`${this.apiUrl}/`, Ressource);
  }

  updateRessource(id: number, Ressource: Ressource): Observable<Ressource> {
    return this.http.put<Ressource>(`${this.apiUrl}/${id}`, Ressource);
  }

  getRessourceById(id: number): Observable<Ressource> {
    return this.http.get<Ressource>(`${this.apiUrl}/${id}`);
  }

  deleteRessource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
