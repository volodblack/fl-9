import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsDataService } from './lesson-data.service';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LessonsDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
