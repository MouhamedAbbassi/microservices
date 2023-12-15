import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { TypeCours } from 'src/app/models/TypeCours.enum';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { CoursService } from 'src/app/services/cours.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css'],
 
})
export class AddCoursComponent implements OnInit {
  coursForm!: FormGroup; // Updated form variable name
  // Other properties as needed

  constructor(
    private formBuilder: FormBuilder,
    private courService: CoursService, // Updated service injection
    private router: Router
  ) {}

  ngOnInit(): void {
    this.coursForm = this.formBuilder.group({
      rate: ['', [Validators.required], [this.asyncMaxLengthValidator(20)]],
      typeCours: [''],
      
    });

  }
  onSubmit() {
    if (this.coursForm.valid) {
      const formData = this.coursForm.value;
      this.courService.saveCour(formData).subscribe(
        (response: any) => {
          console.log('Response from adding course:', response);
          this.router.navigate(['/back/cours/coursList']); // Update navigation path
        },
        (error) => {
          console.error('Error while adding course:', error);
          console.error('Error details:', error.error);
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