import { Status } from "./Status.enum";

export interface Reclamation{
    idReclamation :number;
    sujet : string;
    description :string;
    dateReclamation :Date;
    status :Status
   }
  