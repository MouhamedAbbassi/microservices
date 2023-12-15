import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamations.service';
import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/Status.enum';

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent implements OnInit {
  reclamations: Reclamation[] = [];
  searchTerm: string = '';

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe(
      (reclamations: Reclamation[]) => {
        this.reclamations = reclamations;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des réclamations :', error);
      }
    );
  }

  applyFilter(): Reclamation[] {
    return this.reclamations.filter(reclamation =>
      reclamation.sujet.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  delete(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(
      () => {
        console.log('Réclamation supprimée avec succès !');
        // Update the list of reclamations after deletion
        this.loadReclamations();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la réclamation :', error);
      }
    );
  }


}
