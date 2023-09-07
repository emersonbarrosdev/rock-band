import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  getFormControl() {
    return this.form.controls;
  }

  onStart() {
    if (this.form.valid) {
      localStorage.setItem('name', this.getFormControl()['name'].value);
      this.router.navigate(['questions']);
    } else {
      this.quizService.showError('O nome deve ter no mínimo 3 caracteres');
    }

  }
}

