import { Component } from '@angular/core';
import { Planification } from 'src/app/models/planification';
import { PlanningService } from 'src/app/services/plannings.service';

@Component({
  selector: 'app-list-planning',
  templateUrl: './list-planning.component.html',
  styleUrls: ['./list-planning.component.css']
})
export class ListPlanningComponent {
  planifications: Planification[] = [];
  searchTerm: string = '';

  constructor(private planificationService: PlanningService) {}

  ngOnInit(): void {
    this.loadPlanifications();
  }


  loadPlanifications(): void {
    // Assuming findAllCours is a method that returns an Observable<Planification[]>
    this.planificationService.findAllCours().subscribe(
      (planifications: Planification[]) => {
        this.planifications = planifications;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des planifications :', error);
      }
    );
  }
  applyFilter(): Planification[] {
    return this.planifications.filter(planification =>
      planification.etat.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  delete(id: number): void {
    this.planificationService.deletePlanification(id).subscribe(
      () => {
        console.log('Planification supprimée avec succès !');
        // Update the list of planifications after deletion
        this.loadPlanifications();
      },
      (error) => {
        console.error('Erreur lors de la suppression de la planification :', error);
      }
    );
  }
}
