export enum DegreeOfKinship {
  CHILDREN = 'children',
  PARENTS = 'parents',
  GRANDPARENTS = 'grandparents',
  GRANDCHILDREN = 'grandchildren',
  GREAT_GRANDCHILDREN = 'great-grandchildren',
  UNCLES = 'uncles',
  BROTHERS = 'brothers',
}

export interface FamilyMemberType {
  name: string;
  rg: string;
  dateOfBirth: Date;
  degreeOfKinship: DegreeOfKinship;
}

export interface CollaboratorType {
  name: string;
  cardNumber: string;
  sector: string;
  familyMembers: FamilyMemberType[];
}

export interface VisitorRegistrationType {
  /* Necessário Mudanças, String => Date */
  chosenDay: string | Date;
  chosenGroup: number;
  collaborator: CollaboratorType;
}

export interface TicketDataType extends VisitorRegistrationType {
  valor: number;
  publicTicketId: number;
}
