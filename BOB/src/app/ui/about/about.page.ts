import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  tutorInfo = [
    {
      name: 'Angela Mathebula',
      img : 'assets/svg/alumni1.jpg',
      subjects: ['Founder'],
      description: `
        I am a 3rd year medical student at the University of Cape Town.
        I have been tutoring for 3 years now and I love it.
        I am a very patient person and I am willing to go the extra mile to help my students.
        I am looking forward to working with you.`,
      img2: 'assets/icon/alumni1.jpg',
    },
    {
      name: 'Menzi Dabula',
      img : 'assets/svg/alumni2.jpg',
      subjects: ['Marketing Director'],
      description: `
      I am a graduate student at the University of Pretoria with a Bachelor of Education. 
      I rarely struggle with my academics and I am willing to help others achieve the same. 
      I am a very patient person and I am willing to go the extra mile to help my students. 
      I am looking forward to working with you.`,
      img2: 'assets/icon/alumni2.jpg',
    },
    {
      name: 'Brandon James',
      img : 'assets/svg/alumni3.jpg',
      subjects: ['Treasurer'],
      description: `A final student at University of Pretoria, busy with Bachelor of Science in Computer Science.
      Have been tutoring for 1 year, I am here to help you get the best results you can get.
      I am a very patient person and I am willing to go the extra mile to help my students. 
      I am looking forward to working with you.`,
      img2: 'assets/icon/alumni3.jpg',
    },
  ];

  aboutInfo = [
    {
      title: 'Who Are We',
      description: `At BOB, we believe that education should be accessible, engaging, and personalized for every student. Our journey began 
      with a vision to transform the way students learn and connect in today's dynamic educational landscape. With a team of 
      passionate educators, technologists, and innovators, we created BOB—a comprehensive and user-friendly platform dedicated 
      to empowering students. We understand the diverse needs of learners, 
      and our mission is to provide them with the tools, resources, and support they need to succeed academically and beyond.`,
      image: 'assets/svg/about.png',
    },
    {
      title: 'Our Vision',
      description: `Our vision at BOB is to revolutionize education by providing a platform that fosters meaningful connections, promotes collaborative 
      learning, and offers personalized experiences for students of all ages and backgrounds. We are committed to breaking down barriers 
      to learning, ensuring that knowledge is accessible to everyone, and inspiring a lifelong love of learning. Through innovative 
      technology and a deep understanding of educational needs, 
      we strive to empower students to reach their full potential and become lifelong learners and contributors to society.`,
      image: 'assets/svg/binoculars.png',
    },
    {
      title: 'Our Goal',
      description: `Our goal at BOB is to establish an online educational ecosystem that sets a new standard for excellence in learning. 
      We aim to connect students through cutting-edge collaboration features, offer personalized tutoring to address individual needs, 
      facilitate virtual study sessions that enhance learning outcomes, and provide effective study schedule management tools. 
      We envision a world where students have the resources and support they need to thrive academically.Our ultimate aim is to 
      empower the next generation of leaders,and innovators.`,
      image: 'assets/svg/goal.png',
    },
  ];

}
