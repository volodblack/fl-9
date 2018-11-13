import { Lesson } from 'src/app/lesson-interface';

export class LessonsDataService {
  
  lastId: number = 0;
  lessons: Lesson[] = [];
  
  constructor() { }
  
  addNewLesson(lesson: Lesson): LessonsDataService {
    lesson.id = ++this.lastId;
    this.lessons.push(lesson);
    return this;
  }
  
  getLessons() {
    return this.lessons;
  }

  getLessonById(id: number): Lesson {
    return this.lessons.filter(lesson => lesson.id === id).pop();
  }
  
  deleteLesson(id: number): LessonsDataService {
    this.lessons = this.lessons.filter(lesson => lesson.id !== id);
    return this;
  }
}