import { DocumentTypesProps } from '@app/entities/documentTypes';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';

export class InMemoryDocumentTypesRepository
  implements DocumentTypesRepository
{
  public documentTypes: DocumentTypesProps[] = [];

  async create(documentType: DocumentTypesProps) {
    this.documentTypes.push(documentType);
  }

  async findMany(): Promise<DocumentTypesProps[]> {
    return this.documentTypes;
  }

  //   async findMany() {
  //     return this.companies;
  //   }

  //   async findCompanyByEmail(email: string): Promise<CompanyProps> {
  //     return this.companies.find((company) => {
  //       return company.email === email ? true : false;
  //     });
  //   }

  //   async deadactivateCompany(id: string): Promise<void> {
  //     const company = this.companies.find((company) => {
  //       return company.id === id ? true : false;
  //     });
  //     company.active = false;
  //   }

  //   async updateCompany(company: CompanyUpdateProps): Promise<CompanyProps> {
  //     const updatedCompany = this.companies.find((company) => {
  //       return company.id === company.id ? true : false;
  //     });
  //     updatedCompany.cnpj = company.cnpj;
  //     updatedCompany.corporateName = company.corporateName;
  //     updatedCompany.phoneNumber = company.phoneNumber;
  //     updatedCompany.popularName = company.popularName;
  //     updatedCompany.photoUrl = company.photoUrl;
  //     updatedCompany.address = company.address;
  //     return updatedCompany;
  //   }
}
