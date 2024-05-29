export class ChecklistCompletee {
    id:number
    userId:number
    titrePlanning:string
    debut:Date
    fin:Date 
    titreChecklist:string
    descriptionChecklist:string
    outillage:string
    matriculeValidation1:string
    constats:string
    resteAfaire:string  
    typeZone:TypeZone
    
    

}


export enum TypeZone {
    INTEGRATION = '  INTEGRATION',
    CMS2 = '  CMS2'

}