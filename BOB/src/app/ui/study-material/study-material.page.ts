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

  selectedTab: string = 'notes'; // Define selectedTab property
    // Define properties for noteModules, examModules, and tutorialModules
    noteModules: any[] = [
      { name: 'COS 301', description: 'All notes for Software Engineering' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },  
      { name: 'Mathematics Gr 12', description: 'Notes for everything in Mathematics' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
    ];
    
    examModules: any[] = [
      { name: 'COS 301', description: 'Description for Note Module 1' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
      { name: 'COS 301', description: 'Description for Note Module 1' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
    ];
    
    tutorialModules: any[] = [
      { name: 'COS 301', description: 'Description for Note Module 1' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
      { name: 'COS 301', description: 'Description for Note Module 1' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
    ];
    
  categories: any[] = [];
  selectedCategory: any;
  // studyMaterials: any[] = [];

  name: string | undefined;
  description: string | undefined;
  // Add any other properties as needed

  

  constructor(private studyMaterialService: StudyMaterialService,
              private navCtrl: NavController // Inject NavController
    ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.studyMaterialService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  openCategory(categoryId: number) {
    this.studyMaterialService.getStudyMaterialsByCategory(categoryId).subscribe((data: any) => {
      // Update the selected category and study materials with the fetched data
      this.selectedCategory = this.categories.find((category) => category.id === categoryId);
      this.studyMaterials = data;
    });
  }
  openSearch(){
    this.navCtrl.navigateForward('/search');
  }
  selectedType: string = '';
  selectedYear: string = '';
  selectedSubject: string = '' // Initialize with an empty string
  studyMaterials: any[] = [
    // Replace this with your actual study material data
    {
      title: 'Material 1',
      description: 'Description for Material 1',
      year: '2022',
    },
    {
      title: 'Material 2',
      description: 'Description for Material 2',
      year: '2021',
    },
    // Add more study materials as needed
  ];

  get filteredMaterials(): any[] {
    // Filter the study materials based on the selected year and other filters
    return this.studyMaterials.filter((material) => {
      if (this.selectedYear !== '' && material.year !== this.selectedYear) {
        return false;
      }
      // Add additional filtering conditions here if needed
      return true;
    });
  }
}
