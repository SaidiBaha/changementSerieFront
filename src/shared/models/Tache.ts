export enum StatutTache {
    TO_DO = 'TO_DO',
    DOGIN='DOGIN',
    DONE='DONE'

}

export class Tache {
    idDto!: number;
    titreTacheDto!: string;
    descriptionTacheDto!: string;
    dateDebutTacheDto!: Date;
    dateFinTacheDto!: Date;
    statutTacheDto!: StatutTache;
    userIDDto!: number;
    projetDto!:number;
    // Autres propriétés nécessaires
  }