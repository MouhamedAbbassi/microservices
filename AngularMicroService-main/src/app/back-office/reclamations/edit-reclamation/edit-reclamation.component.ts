import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamations.service';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  reclamationId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService, // Update service name
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reclamationForm = this.formBuilder.group({
      // Update fields for reclamation
      sujet: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required]],
      // Add other fields if necessary
    });

    // Check if a reclamation ID is present in the URL (for updating)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.reclamationId = +id;
        this.loadReclamationData(this.reclamationId);
      }
    });
  }

  loadReclamationData(id: number): void {
    this.reclamationService.getReclamationById(id).subscribe(
      reclamation => {
        // Update the form with existing reclamation data
        this.reclamationForm.patchValue(reclamation);
      },
      error => {
        console.error('Error fetching reclamation details:', error);
      }
    );
  }

  onSubmit() {
    if (this.reclamationForm.valid) {
      const formData = this.reclamationForm.value;

      // Update the reclamation if an ID is present
      if (this.reclamationId) {
        this.reclamationService.updateReclamation( formData).subscribe(
          (response) => {
            console.log('Reclamation updated successfully!', response);
            this.router.navigate(['/back/reclamation/reclamationList']);
          },
          (error) => {
            console.error('Error updating reclamation:', error);
          }
        );
      }
    }
  }
}
