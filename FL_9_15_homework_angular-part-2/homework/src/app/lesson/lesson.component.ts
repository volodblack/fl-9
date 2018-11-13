import { Component, Input } from '@angular/core';
import { LessonsDataService } from 'src/app/lesson-data.service';
import { Lesson } from 'src/app/lesson-interface';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})

export class LessonComponent {
  
  public isShown: boolean;
  public isEditMode = false;

  constructor(private lessonsDataService: LessonsDataService ) {}
  
  @Input() lesson: Lesson;
  
  get lessons() {
    return this.lessonsDataService.getLessons();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  cancelOrSave() {
    this.toggleEditMode();
  }

  delete(lesson: Lesson) {
    this.lessonsDataService.deleteLesson(lesson.id);
  }

  showModal() {
    this.isShown = !this.isShown;
  }
}