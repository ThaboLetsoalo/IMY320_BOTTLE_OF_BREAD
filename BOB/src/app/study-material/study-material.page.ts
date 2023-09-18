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
    // Define properties for noteModules, examModules, and bookModules
    noteModules: any[] = [
      { name: 'COS 301', description: 'Description for Note Module 1' },
      { name: 'COS 333', description: 'Description for Note Module 2' },
      { name: 'IMY 320', description: 'Description for Note Module 3' },
    ];
    
    examModules: any[] = [
      { name: 'Exam Module 1', description: 'Description for Exam Module 1' },
      { name: 'Exam Module 2', description: 'Description for Exam Module 2' },
      { name: 'Exam Module 3', description: 'Description for Exam Module 3' },
    ];
    
    bookModules: any[] = [
      { name: 'Book Module 1', description: 'Description for Book Module 1' },
      { name: 'Book Module 2', description: 'Description for Book Module 2' },
      { name: 'Book Module 3', description: 'Description for Book Module 3' },
    ];
    
  categories: any[] = [];
  selectedCategory: any;
  studyMaterials: any[] = [];

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
}
