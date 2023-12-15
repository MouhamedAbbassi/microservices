import { Component, OnInit } from '@angular/core';
import { Ressource } from 'src/app/models/ressource';
import { RessourceService } from 'src/app/services/ressources.service';

@Component({
  selector: 'app-list-ressources',
  templateUrl: './list-ressources.component.html',
  styleUrls: ['./list-ressources.component.css']
})
export class ListRessourcesComponent implements OnInit {
  ressources: Ressource[] = [];
  searchTerm: string = '';

  constructor(private ressourceService: RessourceService) {}

  ngOnInit(): void {
    this.loadRessources();
  }

  loadRessources(): void {
    this.ressourceService.getAllRessources().subscribe(
      (ressources: Ressource[]) => {
        this.ressources = ressources; // Fix typo here
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des ressources :', error);
      }
    );
  }

  applyFilter(): Ressource[] { // Fix the return type here
    return this.ressources.filter(ressource =>
      ressource.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  delete(id: number): void {
    this.ressourceService.deleteRessource(id).subscribe(
      () => {
        console.log('Ressource supprimée avec succès !');
        // Update the list of ressources after deletion
        this.loadRessources();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la ressource :', error);
      }
    );
  }
}
