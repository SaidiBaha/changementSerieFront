export class Reclamation {
  idDto: number;
  titreReclam: string;
  description: string;
  degreUrgenceDto: string;
  userDto: number;
}
  export enum DegreUrgence {
    NORMAL='NORMAL',
    URGENTE='URGENTE',
    TRES_URGENTE='TRES_URGENTE'
  }