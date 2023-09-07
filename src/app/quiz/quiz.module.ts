import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuestionsComponent } from './components/questions/questions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizRoutingModule } from './quiz-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogComponent } from './components/dialog/dialog.component';
import { IsCorrent } from './directive/is-correct';
import { QuizService } from './service/quiz.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    QuestionsComponent,
    WelcomeComponent,
    DialogComponent,
    IsCorrent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    QuizRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [QuizService],
})
export class QuizModule { }
