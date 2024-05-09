import { PlanningChangementSerie } from "./PlanningChangementSerie "

export class Checklist {
    idDto:number
    titreDto:string
    descriptionDto:string
    outillageDto:string
    matriculeValidation1Dto:string
    matriculeValidation2Dto:string
    typeValidationDto:TypeValidation
    constasDto:string
    resteAfaireDto:string
    typeZoneDto:TypeZone
    testeurDto:number
    familleDto:number
    selectedFamilleId: number;
    selectedTesteurId: number;
    planningDto:PlanningChangementSerie;


}

export enum TypeValidation {
    VALIDATION1 = ' VALIDATION1',
    VALIDATION2 = ' VALIDATION2'


}
export enum TypeZone {
    INTEGRATION = '  INTEGRATION',
    CMS2 = '  CMS2'

}