import { Injectable } from "@angular/core";
import { HttpRepositoryService } from "src/core/httpRepository.service";
import { Testeur } from "../models/Testeur";

@Injectable({
    providedIn: 'root'
  })
export class TesteurService {

  private BASE_URI = 'springMVC/api/v1/testeurs';

  constructor(private httpRepositoryService: HttpRepositoryService) { }

  createTesteur(testeur: Testeur) {
      return this.httpRepositoryService.post<Testeur>(`${this.BASE_URI}`, testeur);
  }

  getTesteurById(id: number) {
      return this.httpRepositoryService.get<Testeur>(`${this.BASE_URI}/${id}`);
  }

  getAllTesteurs() {
      return this.httpRepositoryService.get<Testeur[]>(`${this.BASE_URI}/getAll`);
  }

  updateTesteur(id: number, testeurDto: Testeur) {
      return this.httpRepositoryService.put<Testeur>(`${this.BASE_URI}/${id}`, testeurDto);
  }

  deleteTesteur(id: number) {
      return this.httpRepositoryService.delete<void>(`${this.BASE_URI}/${id}`);
  }
}