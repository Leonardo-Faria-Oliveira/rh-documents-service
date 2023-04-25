import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DocumentTypesRepository } from '@app/repositories/documentTypesRepository';
import { DocumentTypesProps } from '@app/entities/documentTypes';

@Injectable()
export class PrismaDocumentTypesRepository implements DocumentTypesRepository {
  constructor(private prismaService: PrismaService) {}

  //Create a company on database
  async create(documentTypes: DocumentTypesProps): Promise<void> {
    console.log(documentTypes.id);
    await this.prismaService.documentTypes.create({
      data: {
        id: documentTypes.id,
        name: documentTypes.name,
        content: documentTypes.content,
      },
    });
  }

  //   //Gets all the companies from database
  //   async findMany(): Promise<Company[]> {
  //     const companies = await this.prismaService.company.findMany({
  //       select: {
  //         email: true,
  //         popularName: true,
  //         corporateName: true,
  //         password: true,
  //         CNPJ: true,
  //         createdAt: true,
  //         address: true,
  //         id: true,
  //         active: true,
  //         phoneNumber: true,
  //         photoUrl: true,
  //         updatedAt: true,
  //       },
  //       orderBy: {
  //         createdAt: 'desc',
  //       },
  //       where: {
  //         active: true,
  //       },
  //     });

  //     return companies.map((company) => {
  //       return PrismaCompanyMapper.toDomain(company, company.address);
  //     });
  //   }

  //   //Gets a company from database by email
  //   async findCompanyByEmail(email: string): Promise<CompanyProps> {
  //     const company = await this.prismaService.company.findUnique({
  //       select: {
  //         email: true,
  //         popularName: true,
  //         corporateName: true,
  //         password: true,
  //         CNPJ: true,
  //         createdAt: true,
  //         address: true,
  //         id: true,
  //         active: true,
  //         phoneNumber: true,
  //         photoUrl: true,
  //         updatedAt: true,
  //       },
  //       where: {
  //         email: email,
  //       },
  //     });

  //     return PrismaCompanyMapper.toDomainLogin(company, company.address);
  //   }

  //   async deadactivateCompany(id: string): Promise<void> {
  //     await this.prismaService.company.update({
  //       where: {
  //         id: id,
  //       },
  //       data: {
  //         active: false,
  //       },
  //     });
  //   }

  //   async updateCompany(company: CompanyUpdateProps): Promise<CompanyProps> {
  //     const updatedCompany = await this.prismaService.company.update({
  //       select: {
  //         email: true,
  //         popularName: true,
  //         corporateName: true,
  //         password: true,
  //         CNPJ: true,
  //         createdAt: true,
  //         address: true,
  //         id: true,
  //         active: true,
  //         phoneNumber: true,
  //         photoUrl: true,
  //         updatedAt: true,
  //       },
  //       where: {
  //         id: company.id,
  //       },
  //       data: {
  //         popularName: company.popularName,
  //         corporateName: company.corporateName,
  //         phoneNumber: company.phoneNumber,
  //         CNPJ: company.cnpj,
  //         address: {
  //           update: {
  //             country: company.address.countryValue,
  //             countryArea: company.address.countryAreaValue,
  //             city: company.address.cityValue,
  //             neighboor: company.address.neighboorValue,
  //             street: company.address.streetValue,
  //             number: company.address.numberValue,
  //           },
  //         },
  //       },
  //     });

  //     return PrismaCompanyMapper.toDomainLogin(
  //       updatedCompany,
  //       updatedCompany.address,
  //     );
  //   }

  // async findById(userId: string): Promise<User> {
  //     const user = await this.prismaService.user.findUnique({
  //         where:{
  //             id: userId
  //         }
  //     })

  //     if(!user){
  //         return null
  //     }

  //     return PrismaUserMapper.toDomain(user)
  // }

  // async update(user: User): Promise<User> {

  //     console.log("raw")
  //     const raw = PrismaUserMapper.toPrisma(user)

  //     const userUpdated =await this.prismaService.user.update({
  //         where:{
  //             id:user.id
  //         },
  //         data:raw
  //     })

  //     console.log(userUpdated)

  //     if(!userUpdated){
  //         console.log("usuario não encontrado")
  //         return null
  //     }

  //     return PrismaUserMapper.toDomain(userUpdated)

  // }

  // async turnOffUser(userId: string): Promise<void> {
  //     await this.prismaService.user.update({
  //         where:{
  //             id:userId
  //         },
  //         data:{
  //             active:false
  //         }
  //     })
  // }

  // async turnOnUser(userId: string): Promise<void> {
  //             await this.prismaService.user.update({
  //         where:{
  //             id:userId
  //         },
  //         data:{
  //             active:true
  //         }
  //     })
  // }
}
