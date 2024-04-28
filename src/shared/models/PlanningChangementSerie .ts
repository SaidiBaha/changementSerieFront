import { Checklist } from "./Checklist";

export class PlanningChangementSerie {
    idDto: number;
    titreDto: string;
    debutDto: Date;
    finDto: Date;
    descriptionDto: string;
    changementEffectueDto:boolean
    checklistsDto: Checklist[];
  }