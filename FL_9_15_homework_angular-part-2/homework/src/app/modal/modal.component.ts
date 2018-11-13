import { Component, Input } from '@angular/core';
import { LessonsDataService } from 'src/app/lesson-data.service';
import { Lesson } from 'src/app/lesson-interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent  {
  
  lesson: Lesson = new Lesson();
  
  constructor(private lessonsDataService: LessonsDataService) { }
  
  @Input() isOpen;
  
  addNewLesson(): void {
    this.lessonsDataService.addNewLesson(this.lesson);
    this.lesson = new Lesson();
  }

  close(): void {
    this.isOpen = false;
  }
}