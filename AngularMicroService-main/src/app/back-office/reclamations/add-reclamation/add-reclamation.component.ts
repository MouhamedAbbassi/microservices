import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamations.service';
import { of, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reclamationForm = this.formBuilder.group({
      sujet: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
        [this.asyncMaxLengthValidator(20)],
      ],
      description: ['', [Validators.required]]
      
    });
  }



  onSubmit() {
    if (this.reclamationForm.valid) {
      
      this.reclamationService.createReclamation(this.reclamationForm.value).subscribe(
        (response: any) => {
          console.log('Réponse de l\'ajout du rec :', response);
          this.router.navigate(['/back/reclamations/reclamationList']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du rec :', error);
        }
      );
    }
  }

  private asyncMaxLengthValidator(maxLength: number): AsyncValidatorFn {
    return (control: AbstractControl):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const value: string = control.value;

      if (!value) {
        return of(null);
      }

      return of(value.length <= maxLength ? null : { maxLength: true });
    };

}

}