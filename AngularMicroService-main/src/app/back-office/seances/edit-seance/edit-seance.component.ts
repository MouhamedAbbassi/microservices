import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SeancesService } from 'src/app/services/seances.service';

@Component({
  selector: 'app-edit-seance',
  templateUrl: './edit-seance.component.html',
  styleUrls: ['./edit-seance.component.css']
})
export class EditSeanceComponent implements OnInit {
  seanceForm!: FormGroup; // Updated form variable name
  seanceId: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private seanceService: SeancesService, // Updated service name
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.seanceForm = this.formBuilder.group({
      lieu: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      dateSeance: ['', [Validators.required]],
      // Add other fields if necessary
    });

    // Check if a "seance" ID is present in the URL (for updating)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.seanceId = id;
        this.loadSeanceData(this.seanceId);
      }
    });
  }

  loadSeanceData(id: string): void {
    this.seanceService.getSeanceById(id).subscribe(
      seance => {
        // Update the form with existing "seance" data
        this.seanceForm.patchValue(seance);
      },
      error => {
        console.error('Error fetching seance details:', error);
      }
    );
  }

  onSubmit() {
    if (this.seanceForm.valid) {
      const formData = this.seanceForm.value;

      // Update the "seance" if an ID is present
      if (this.seanceId) {
        this.seanceService.updateSeance(this.seanceId, formData).subscribe(
          (response) => {
            console.log('Seance updated successfully!', response);
            this.router.navigate(['/back/seances/seancesList']);
          },
          (error) => {
            console.error('Error updating seance:', error);
          }
        );
      }
    }
  }
}
