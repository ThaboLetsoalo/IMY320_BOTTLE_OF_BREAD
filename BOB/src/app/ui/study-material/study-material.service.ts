// study-material.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudyMaterialService {
  private categories = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
  ];

  private studyMaterials = [
    { id: 1, name: 'Algebra Notes', description: 'Basic algebra concepts', thumbnailUrl: '...', link: '...', categoryId: 1 }, // Assign categoryId
    { id: 2, name: 'Physics Exam Paper', description: 'Sample physics exam paper', thumbnailUrl: '...', link: '...', categoryId: 2 }, // Assign categoryId
  ];

  getCategories(): Observable<any[]> {
    return of(this.categories);
  }

  getStudyMaterialsByCategory(categoryId: number): Observable<any[]> {
    // Filter study materials by categoryId
    const materials = this.studyMaterials.filter((material) => material.categoryId === categoryId);
    return of(materials);
  }
}
