import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {
  cours: Cours[] = [];
  searchTerm: string = '';

  constructor(private coursService: CoursService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursService.findAllCours().subscribe(
      (courses: Cours[]) => {
        this.cours = courses; // Update variable name here
      },
      (error: any) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  applyFilter(): Cours[] { // Update return type here
    return this.cours.filter(course =>
      course.rate.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  delete(id: number): void {
    this.coursService.deleteCour(id).subscribe(
      () => {
        console.log('Course deleted successfully!');
        // Update the list of courses after deletion
        this.loadCourses();
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }
}
