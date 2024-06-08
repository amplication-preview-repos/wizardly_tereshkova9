import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrmEntityServiceBase } from "./base/crmEntity.service.base";

@Injectable()
export class CrmEntityService extends CrmEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
