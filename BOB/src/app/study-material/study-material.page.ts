import { Component, OnInit } from '@angular/core';
import { StudyMaterialService } from './study-material.service';

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.page.html',
  styleUrls: ['./study-material.page.scss'],
  providers: [StudyMaterialService],

})
export class StudyMaterialPage implements OnInit {
  categories: any[] = [];
  selectedCategory: any;
  studyMaterials: any[] = [];

  constructor(private studyMaterialService: StudyMaterialService) {}

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
  
}
