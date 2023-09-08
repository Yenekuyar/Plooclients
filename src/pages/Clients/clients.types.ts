export interface IPlooClients {
  Id: number;
  Name: string;
  CNPJ?: string;
  CPF?: string;
  Email?: string;
  Phones?: [{
    Id?: string,
    PhoneNumber?: string,
  }];
  StreetAddress?: string,
  StreetAddressNumber?: string;
  Neighborhood?: string;
  TypeId?: number;
  ZipCode?: number;
}