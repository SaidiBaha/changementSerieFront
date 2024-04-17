export class ValidationsInput {
    id: number;
    ligneChecklistId: number;
    posageId: number;
    validationType: TypeValidation;
    
}

export enum TypeValidation {
    OK = '  OK',
    NOK = '  NOK',
    NA = '  NA'

}
