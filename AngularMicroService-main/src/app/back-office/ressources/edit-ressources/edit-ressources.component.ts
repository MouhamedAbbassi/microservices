import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessourceService } from 'src/app/services/ressources.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-ressources',
  templateUrl: './edit-ressources.component.html',
  styleUrls: ['./edit-ressources.component.css']
})
export class EditRessourcesComponent implements OnInit {
  ressourceForm!: FormGroup;
  ressourceId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private ressourceService: RessourceService, // Update service name
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ressourceForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      description: ['', [Validators.required]],
      // Add other fields if necessary
    });

    // Check if a ressource ID is present in the URL (for updating)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.ressourceId = +id;
        this.loadRessourceData(this.ressourceId);
      }
    });
  }

  loadRessourceData(id: number): void {
    this.ressourceService.getRessourceById(id).subscribe(
      ressource => {
        // Update the form with existing ressource data
        this.ressourceForm.patchValue(ressource);
      },
      error => {
        console.error('Error fetching ressource details:', error);
      }
    );
  }

  onSubmit() {
    if (this.ressourceForm.valid) {
      const formData = this.ressourceForm.value;

      // Update the ressource if an ID is present
      if (this.ressourceId) {
        this.ressourceService.updateRessource(this.ressourceId, formData).subscribe(
          (response) => {
            console.log('Ressource updated successfully!', response);
            this.router.navigate(['/back/ressources/ressourcesList']);
          },
          (error) => {
            console.error('Error updating ressource:', error);
          }
        );
      }
    }
  }
}
