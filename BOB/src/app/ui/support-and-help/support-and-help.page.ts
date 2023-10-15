import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-support-and-help',
  templateUrl: './support-and-help.page.html',
  styleUrls: ['./support-and-help.page.scss'],
})
export class SupportAndHelpPage implements OnInit 
{

  @ViewChild(IonContent) content!: IonContent;

  suggestedQuestions: string[] = ["How do I book a tutor", "How do I become a member", ];

  navigateToQuestion(index: number) {
    if (index === 0) {
      this.scrollToElement('question-container6');
    } else if (index === 1) {
      this.scrollToElement('question-container1');
    }
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      this.content.scrollToPoint(0, element.offsetTop, 500);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
