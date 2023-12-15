import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanningService } from 'src/app/services/plannings.service';

@Component({
  selector: 'app-edit-planning',
  templateUrl: './edit-planning.component.html',
  styleUrls: ['./edit-planning.component.css']
})
export class EditPlanningComponent implements OnInit {
  planningForm!: FormGroup; // Updated form variable name
  planificationId: number | undefined; // Updated variable name

  constructor(
    private formBuilder: FormBuilder,
    private planificationService: PlanningService, // Updated service name
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planningForm = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      // Add other fields if necessary
    });
  }



  onSubmit() {
    if (this.planningForm.valid) {
      const formData = this.planningForm.value;

      // Update the planification if an ID is present
      if (this.planificationId) {
        this.planificationService.updatePlanification(this.planificationId, formData).subscribe(
          (response) => {
            console.log('Planification updated successfully!', response);
            this.router.navigate(['/back/plannings/planningList']); // Updated route here
          },
          (error) => {
            console.error('Error updating planification:', error);
          }
        );
      }
    }
  }
}

