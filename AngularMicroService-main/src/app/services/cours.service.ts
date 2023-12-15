import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  private baseUrl = '/cours';

  constructor(private httpClient: HttpClient) {}

  saveCour(cour: Cours): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}`, cour);
  }

  findAllCours(): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(`${this.baseUrl}`);
  }

  getCourById(id: number): Observable<Cours> {
    return this.httpClient.get<Cours>(`${this.baseUrl}/afficher/${id}`);
  }

  updateCour(id: number, cour: Cours): Observable<Cours> {
    return this.httpClient.put<Cours>(`${this.baseUrl}/update/${id}`, cour);
  }

  deleteCour(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/supprimer/${id}`);
  }
}
