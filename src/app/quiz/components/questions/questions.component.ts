import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  playerName: string;
  questionList: any = [];
  currentQuestion: number = 0;
  isQuizCompleted: boolean = false;
  points: number = 0;
  counter: number = 20;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval: any;
  isSelected: boolean = true;

  constructor(
    private router: Router,
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    this.playerName = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.quizService.getQuestions().subscribe(
      resp => {
        this.questionList = resp.questions;
      })
  }

  questionAnswer(currentQuantity: number, option: any) {
    this.isSelected = false;
    if (currentQuantity === this.questionList.length) {
      this.interval = interval(1000)
        .subscribe(val => {
          this.isQuizCompleted = true;
          this.stopCounter();
        });
      setTimeout(() => {
        this.interval.unsubscribe();
      }, 100000);
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
      }, 1000);
      this.points -= 5;
    }
  }

  startCounter() {
    this.interval = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 20;
          this.points -= 2;
        }
        this.questionTimeout();
      });
    setTimeout(() => {
      this.interval.unsubscribe();
    }, 200000);
  }

  stopCounter() {
    this.interval.unsubscribe();
    this.counter;
  }

  questionTimeout() {
    if (this.currentQuestion >= this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter()
    }
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 20;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 20;
    this.currentQuestion = 0;
  }


  init() {
    this.router.navigate(['']);
  }

}
