import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  STUDENT_API_BASE_PATH: string = "http://localhost:8080/api/v1/student";

  
}
