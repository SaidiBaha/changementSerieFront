import { Checklist } from "./Checklist"
import { ChecklistCompletee } from "./ChecklistCompletee";
import { LigneCheck } from "./LigneCheck";
import { ValidationsInput } from "./ValidationsInput";

export class ChecklistVide{
    idDto:number;
    checklist:Checklist;
    checklistCompleteeDto:ChecklistCompletee;
    lignes:LigneCheck[];
    validationsInput: ValidationsInput[]; 

    

}