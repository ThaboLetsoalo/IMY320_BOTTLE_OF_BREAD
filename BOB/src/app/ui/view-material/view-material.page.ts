import { Component, Input, OnInit } from '@angular/core';
import { set } from '@angular/fire/database';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.page.html',
  styleUrls: ['./view-material.page.scss'],
})
export class ViewMaterialPage implements OnInit {

  @Input() material: any;
  isLoading: boolean = true; 
  // console.log(this.material);

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading discussion..',
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Discussion loaded';
    }, 3000);

    setTimeout(() => {
      loading.dismiss();
      this.isLoading = false; 
    }, 4000);
  }
  
  closeModal() {
    this.modalController.dismiss();
  }

  defaultAnswers = [
    {
      author: 'Mthunzi Mthembu',
      answer: 'This is a tricky question, but I will try my best to answer it....I hope this helps.'
    },
    {
      author: 'Nathan James',
      answer: 'I am not sure, but I think this is the answer...'},
    {
      author: 'Jane Dora',
      answer: 'To solve this problem, you need to use the following formula...'},
    {
      author: 'John Davison',
      answer: 'I think the answer is...'
    },
  ];

  async submitAnswer()
  {
    const loading = await this.loadingController.create({
      message: 'Submitting answer...',
      duration: 4000, 
      spinner: 'bubbles',
    });

    await loading.present();

    setTimeout(() => {
      loading.message = 'Answer submitted';
    }, 3000);

    setTimeout(() => {
      loading.dismiss();
      this.closeModal();
    }, 4000);
  }

}