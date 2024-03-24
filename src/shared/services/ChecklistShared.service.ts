import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistSharedService {
  private checklistIdSource = new BehaviorSubject<number>(null);
  currentChecklistId = this.checklistIdSource.asObservable();

  changeChecklistId(id: number) {
    this.checklistIdSource.next(id);
  }
}