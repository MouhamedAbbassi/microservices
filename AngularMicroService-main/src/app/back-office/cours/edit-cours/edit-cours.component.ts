import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from 'src/app/services/cours.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit {
  coursForm!: FormGroup;
  courseId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService, // Update service name
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.coursForm = this.formBuilder.group({
      rate: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      typeCours: ['', [Validators.required]],
      // Add other fields if necessary
    });

    // Check if a course ID is present in the URL (for updating)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseId = +id;
        this.loadCourseData(this.courseId);
      }
    });
  }

  loadCourseData(id: number): void {
    this.coursService.getCourById(id).subscribe(
      course => {
        // Update the form with existing course data
        this.coursForm.patchValue(course);
      },
      error => {
        console.error('Error fetching course details:', error);
      }
    );
  }

  onSubmit() {
    if (this.coursForm.valid) {
      const formData = this.coursForm.value;

      // Update the course if an ID is present
      if (this.courseId) {
        this.coursService.updateCour(this.courseId, formData).subscribe(
          (response) => {
            console.log('Course updated successfully!', response);
            this.router.navigate(['/back/cours/coursList']);
          },
          (error) => {
            console.error('Error updating course:', error);
          }
        );
      }
    }
  }
}

