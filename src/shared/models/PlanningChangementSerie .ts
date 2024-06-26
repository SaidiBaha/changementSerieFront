import { Checklist } from "./Checklist";

export class PlanningChangementSerie {
    idDto: number;
    titreDto: string;
    debutDto: Date;
    finDto: Date;
    descriptionDto: string;
    changementEffectueDto:boolean
    nombreModelChecklist:number;

    etatChangementDto:EtatChangement;
    
    nombreChecklistRemplieValidation1:number;
    nombreChecklistRemplieValidation2:number;

    checklistsDto: Checklist[];
    avancement: number=0;
  }

  export enum EtatChangement {
    PREPARATION = 'PREPARATION',
    VERIFICATION = 'VERIFICATION',
    CHANGEMENTEFFECTUE = 'CHANGEMENTEFFECTUE'


}