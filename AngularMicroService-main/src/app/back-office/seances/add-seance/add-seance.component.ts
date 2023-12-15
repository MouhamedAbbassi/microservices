import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SeancesService } from 'src/app/services/seances.service';

@Component({
  selector: 'app-add-seance',
  templateUrl: './add-seance.component.html',
  styleUrls: ['./add-seance.component.css']
})
export class AddSeanceComponent implements OnInit {
  seanceForm!: FormGroup; // Updated form variable name

  constructor(
    private formBuilder: FormBuilder,
    private seanceService: SeancesService, // Updated service name
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seanceForm = this.formBuilder.group({
      lieu: [
        '',
        [
          Validators.required,

        ],

      ],
      prix: ['', [Validators.required]],
      dateSeance: ['', [Validators.required]]
      // Add other fields as necessary for managing "seance"
    });
  }

  onSubmit() {
    if (this.seanceForm.valid) {
      this.seanceService.addSeance(this.seanceForm.value).subscribe(
        (response: any) => {
          console.log('Réponse de l\'ajout de la séance :', response);
          this.router.navigate(['/back/seances/seancesList']); // Updated route here
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la séance :', error);
        }
      );
    }
  }

}
