import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-and-help',
  templateUrl: './support-and-help.page.html',
  styleUrls: ['./support-and-help.page.scss'],
})
export class SupportAndHelpPage implements OnInit {
  suggestedQuestions: string[] =["Question one", "Question 2", "How do I become a member"];
  constructor() { }

  ngOnInit() {
  }

}
