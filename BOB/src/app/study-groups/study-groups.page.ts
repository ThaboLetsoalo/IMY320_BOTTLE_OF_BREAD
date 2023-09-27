import { Component } from '@angular/core';

@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.page.html',
  styleUrls: ['./study-groups.page.scss'],
})
export class StudyGroupsPage {
  selectedTab: string = 'create-join';

  createJoinData: any[] = [
    {
      groupName: 'Albert Einsteins',
      description: 'Group for innovative thinkers and problem solvers',
      members: 10,
    },
    {
      groupName: 'Maths Geeks',
      description: 'We are the best at maths! Join us to find out more!',
      members: 8,
    },
    {
      groupName: 'Physics Lovers',
      description: 'Group for people who love physics',
      members: 7,
    },
    {
      groupName: 'Chemistry Lovers',
      description: 'Group for people who love chemistry',
      members: 15,
    }
  ];

  // Mock data for the Ongoing/Upcoming tab
  ongoingUpcomingData: any[] = [
    {
      eventName: 'Maths Pre-Exam Revision',
      date: '2023-10-25',
      location: 'Virtual',
    },
    {
      eventName: 'Physics Test Preparation',
      date: '2023-10-30',
      location: 'Online',
    },
    {
      eventName: 'Chemistry Exam Preparation',
      date: '2023-11-05',
      location: 'Virtual',
    },
    {
      eventName: 'Physics Exam Preparation',
      date: '2023-11-10',
      location: 'Online',
    }
  ];

  // Mock data for the Virtual Study Sessions tab
  studySessionsData: any[] = [
    {
      sessionName: 'Newton\'s Laws of Motion',
      date: '2023-10-08',
      link: 'https://example.com/session1',
      
    },
    {
      sessionName: 'Chemical Reactions',
      date: '2023-10-08',
      link: 'https://example.com/session2',
      
    },
    {
      sessionName: 'Maths Equations',
      date: '2023-10-08',
      link: 'https://example.com/session3',
      
    },
    {
      sessionName: 'Chemical Equations P1',
      date: '2023-10-08',
      link: 'https://example.com/session4',
    },
    {
      sessionName: 'Maths Equations',
      date: '2023-10-08',
      link: 'https://example.com/session5',
    },
    {
      sessionName: 'Chemical Equations P2',
      date: '2023-10-08',
      link: 'https://example.com/session6',
    }

  ];

  constructor() {}

  createGroup()
  {
    // Create a new group
  }
}
