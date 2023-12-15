import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = '/reclamations';

  constructor(private http: HttpClient) { }

  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl + '/get-reclamations');
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(this.apiUrl + '/get-reclamationById?id=' + id);
  }

  createReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl + '/save-rec', reclamation);
  }

  updateReclamation(updatedReclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.apiUrl + '/put-rec', updatedReclamation);
  }

  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + 'del-rec?id=' + id);
  }

  getReclamationsByStatut(statut: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl + 'getByStatut?statut=' + statut);
  }

  getReclamationsBySujet(sujet: string): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl + 'getBySujet?sujet=' + sujet);
  }

  changerStatutReclamation(idReclamation: number, nouvelleReclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(this.apiUrl + 'changerStatut?idReclamation=' + idReclamation, nouvelleReclamation);
  }
}
