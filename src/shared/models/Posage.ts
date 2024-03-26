export class Posage {
    idDto: number;
    nomInterfaceDto:string;
    validationType1Dto:ValidationType;
    validationType2Dto:ValidationType;

    ligneChecklistDto:number;
}

export enum ValidationType {
    OK = ' OK',
    NOK = ' NOK',
    NA = ' NA'


}