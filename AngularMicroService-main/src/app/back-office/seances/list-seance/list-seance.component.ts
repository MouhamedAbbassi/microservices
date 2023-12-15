import { Component, OnInit } from '@angular/core';
import { Seance } from 'src/app/models/seance';
import { SeancesService } from 'src/app/services/seances.service';

@Component({
  selector: 'app-list-seance',
  templateUrl: './list-seance.component.html',
  styleUrls: ['./list-seance.component.css']
})
export class ListSeanceComponent implements OnInit {
  seances: Seance[] = []; // Updated type to Seance
  searchTerm: string = '';

  constructor(private seanceService: SeancesService) {} // Updated service name

  ngOnInit(): void {
    this.loadSeances(); // Updated method name
  }

  loadSeances(): void { // Updated method name
    this.seanceService.getAllSeances().subscribe(
      (seances: Seance[]) => { // Updated type to Seance
        this.seances = seances; // Updated type to Seance
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des séances :', error);
      }
    );
  }

  applyFilter(): Seance[] { // Updated type to Seance
    return this.seances.filter(seance =>
      seance.lieu.toLowerCase().includes(this.searchTerm.toLowerCase()) // Assuming "lieu" is the property to filter
    );
  }

  delete(id: string): void { // Updated type to string
    this.seanceService.deleteSeance(id).subscribe(
      () => {
        console.log('Séance supprimée avec succès !'); // Updated success message
        // Update the list of séances after deletion
        this.loadSeances(); // Updated method name
      },
      (error) => {
        console.error('Erreur lors de la suppression de la séance :', error); // Updated error message
      }
    );
  }
}

