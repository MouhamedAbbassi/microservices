import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanningService } from 'src/app/services/plannings.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {
  planningForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private planningService: PlanningService, // Update service name
    private router: Router
  ) {}

  ngOnInit(): void {
    this.planningForm = this.formBuilder.group({
      startDate: [
        '',
        [
          Validators.required,
        ],
      ],
      endDate: ['', [Validators.required]],
      etat: ['', [Validators.required]]
      // Add other fields as necessary for managing planning
    });
  }

  onSubmit() {
    if (this.planningForm.valid) {
      this.planningService.addPlanification(this.planningForm.value).subscribe(
        (response: any) => {
          console.log('Response from adding planning:', response);
          this.router.navigate(['/back/plannings/planningList']); // Update route here
        },
        (error: any) => {
          console.error('Error adding planning:', error);
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
