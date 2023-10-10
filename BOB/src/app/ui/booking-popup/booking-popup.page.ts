import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-popup',
  templateUrl: './booking-popup.page.html',
  styleUrls: ['./booking-popup.page.scss'],
})
export class BookingPopupPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  tutorInfo = [
    {
      name: 'Angela Mathebula',
      img : 'assets/svg/alumni1.jpg',
      subjects: ['Biology', 'Anatomy', 'Mathematics'],
      description: `
        I am a 3rd year medical student at the University of Cape Town.
        I have been tutoring for 3 years now and I love it.
        I am a very patient person and I am willing to go the extra mile to help my students.
        I am looking forward to working with you.
      `
    },
    {
      name: 'Sipho Mkhize',
      img : 'assets/svg/alumni2.jpg',
      subjects: ['English', 'Mathematics', 'Swati'],
      description: `
      I am a graduate student at the University of Pretoria with a Bachelor of Education. 
      I rarely struggle with my academics and I am willing to help others achieve the same. 
      I am a very patient person and I am willing to go the extra mile to help my students. 
      I am looking forward to working with you.
      `
    },
    {
      name: 'Brandon James',
      img : 'assets/svg/alumni3.jpg',
      subjects: ['Computer Literacy', 'Programming', 'Mathematics'],
      description: `A final student at University of Pretoria, busy with Bachelor of Science in Computer Science.
      Have been tutoring for 1 year, I am here to help you get the best results you can get.
      I am a very patient person and I am willing to go the extra mile to help my students. 
      I am looking forward to working with you.`
    },
    {
      name: 'David Kaula',
      img : 'assets/svg/alumni4.jpg',
      subjects: ['Law', 'English', 'Mathematics'],
      description: `
        A final year student at University of Fort Hare, busy with Bachelor of Laws.
        Have been tutoring for 2 years, I love helping others, and it brings a smile to my face.
        I am a very patient person and I am willing to go the extra mile to help my students.
        I am looking forward to working with you.
      `
    },

  ]

}