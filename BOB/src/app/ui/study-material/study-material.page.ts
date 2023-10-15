import { Component, OnInit } from '@angular/core';
import { StudyMaterialService } from './study-material.service';
import { NavController } from '@ionic/angular'; // Import NavController
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.page.html',
  styleUrls: ['./study-material.page.scss'],
  providers: [StudyMaterialService],

})
export class StudyMaterialPage implements OnInit {

  isModalOpen = false;
  selectedDiscussion: any;
  
  constructor(private studyMaterialService: StudyMaterialService, private navCtrl: NavController,
    private modalController: ModalController, private loadingController: LoadingController,) { }
 

  ngOnInit() 
  {}

  
  async search() { 
    const loading = await this.loadingController.create({
      message: 'Searching For A Discussion',
      duration: 3000, 
      spinner: 'bubbles',
    });

    await loading.present();
    loading.message = 'Discussions loading';
    setTimeout(() => {
      loading.dismiss();
    }, 4000);
  }

  educationDiscussion = 
  [
    {
      author : 'John Doe',
      title : 'How is integration by parts used?',
      question : 'I am having trouble understanding how to use integration by parts. Can someone explain it to me?',
      img: 'assets/svg/question.png', 
      subject : 'Mathematics',
    },
    {
      author : 'Jane Doe',
      title : 'What is the difference between a vector and a scalar?',
      question : 'I am having trouble understanding the difference between a vector and a scalar. Can someone explain it to me?',
      img: 'assets/svg/question.png', 
      subject : 'Physics',
    },
    {
      author : 'Mazwi Mthembu',
      title : 'How do I balance chemical equations?',
      question : 'I am having trouble balancing chemical equations. Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'Chemistry',
    },
    {
      author: 'Dineo Molefe',
      title: 'What is the difference between mitosis and meiosis?',
      question: 'I am having trouble understanding the difference between mitosis and meiosis. Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'Biology',

    },
    {
      author: 'Jack Sparrow',
      title: 'How do I write a good essay?',
      question: 'I am having trouble writing good essays. Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'English',
    },
    {
      author: 'Amber Heard',
      title: 'Which programming language for a website?',
      question: 'I am having trouble deciding which programming language to learn. Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'Computer Science',
    },
    {
      author: 'Rosemary \'Hitlist\' Ndlovu',
      title: 'Business Studies or Economics?',
      question: 'How do insurance companies make money? Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'Business Studies',
    },
    {
      author: 'Barack Odama',
      title: 'Countries which were involved in World War 2?',
      question: 'I am having trouble remembering which countries were involved in World War 2. Can someone explain it to me?',
      img: 'assets/svg/question.png',
      subject : 'History',
    },

  ];

  filterEducationDiscussion = this.educationDiscussion;

  filterBySubject(subject: string) {
    this.filterEducationDiscussion = this.educationDiscussion.filter(discussion => discussion.subject === subject);
  }

  subjectList = [
    'Select Subject','Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography', 'Economics', 'Business Studies', 'Accounting', 'Computer Science'
  ];

  gradeList = [
    'Select Grade','Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', '1st Year', '2nd Year', '3rd Year', '4th Year'
  ];

  selectedSubject = 'Select Subject';
  selectedGrade = 'Select Grade';
  
}