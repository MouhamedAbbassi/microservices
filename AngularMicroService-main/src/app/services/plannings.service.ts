import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planification } from '../models/planification';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  private baseUrl = '/planification'; // Replace with your Spring Boot base URL

  constructor(private httpClient: HttpClient) {}

  addPlanification(planification: Planification): Observable<Planification> {
    return this.httpClient.post<Planification>(`${this.baseUrl}/add`, planification);
  }

   findAllCours(): Observable<Planification[]> {
    return this.httpClient.get<Planification[]>(`${this.baseUrl}/`);
  }


  updatePlanification(id: number, planification: Planification): Observable<Planification> {
    return this.httpClient.put<Planification>(`${this.baseUrl}/${id}`, planification);
  }

  deletePlanification(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseUrl}/${id}`);
  }
}
