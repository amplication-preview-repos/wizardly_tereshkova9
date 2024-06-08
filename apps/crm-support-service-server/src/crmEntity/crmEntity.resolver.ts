import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CrmEntityResolverBase } from "./base/crmEntity.resolver.base";
import { CrmEntity } from "./base/CrmEntity";
import { CrmEntityService } from "./crmEntity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CrmEntity)
export class CrmEntityResolver extends CrmEntityResolverBase {
  constructor(
    protected readonly service: CrmEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
