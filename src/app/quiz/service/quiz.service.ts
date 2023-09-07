import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog,
  ) { }


  getQuestions() {
    const API = "../../../assets/questions.json"
    return this.httpClient.get<any>(API);
  }
  
  showError(msgError: string) {
    this.dialog.open(DialogComponent, {
      data: msgError
    });
  }
}
