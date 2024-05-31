export interface ValidationDetailsDTO {
    validation: any;
    nomTestAFaire: string;
    nomInterface: string;
  }
  
  export interface ChecklistCompleteDetails {
    checklistCompletee: any;
    validations: ValidationDetailsDTO[];
  }