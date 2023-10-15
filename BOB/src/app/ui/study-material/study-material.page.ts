import { Component, OnInit } from '@angular/core';
import { StudyMaterialService } from './study-material.service';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.page.html',
  styleUrls: ['./study-material.page.scss'],
  providers: [StudyMaterialService],

})
export class StudyMaterialPage implements OnInit {

  
  constructor(private studyMaterialService: StudyMaterialService, private navCtrl: NavController) { }
 

  ngOnInit() 
  {}

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