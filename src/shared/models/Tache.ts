export enum StatutTache {
    TO_DO = 'TO_DO',
    DOGIN='DOGIN',
    DONE='DONE'

}

export class Tache {
    idDto!: number;
    titreDto!: string;
    descriptionDto!: string;
    dateDebutDto!: Date;
    dateFinDto!: Date;
    statutDto!: StatutTache;
    userIdDto!: number;
    // Autres propriétés nécessaires
  }