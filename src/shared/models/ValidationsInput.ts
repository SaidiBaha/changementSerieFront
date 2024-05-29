export class ValidationsInput {
    id: number;
    ligneChecklistId: number;
    posageId: number;
    validationType: TypeValidation;
    validationType2:TypeValidation2;
    
}

export enum TypeValidation {
    OK = '  OK',
    NOK = '  NOK',
    NA = '  NA'

}
export enum TypeValidation2 {
    OK = '  OK',
    NOK = '  NOK',
    NA = '  NA'

}