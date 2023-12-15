import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { RessourceService } from 'src/app/services/ressources.service';
import { of, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-ressources',
  templateUrl: './add-ressources.component.html',
  styleUrls: ['./add-ressources.component.css']
})
export class AddRessourcesComponent implements OnInit {
  ressourceForm!: FormGroup; // Fix typo here

  constructor(
    private formBuilder: FormBuilder,
    private ressourceService: RessourceService, // Fix typo here
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ressourceForm = this.formBuilder.group({ // Fix variable name here
      nom: [
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
    if (this.ressourceForm.valid) { // Fix variable name here

      this.ressourceService.addRessource(this.ressourceForm.value).subscribe(
        (response: any) => {
          console.log('Réponse de l\'ajout de la ressource :', response);
          this.router.navigate(['/back/ressources/ressourcesList']); // Fix route here
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la ressource :', error);
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
