import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrmEntityService } from "./crmEntity.service";
import { CrmEntityControllerBase } from "./base/crmEntity.controller.base";

@swagger.ApiTags("crmEntities")
@common.Controller("crmEntities")
export class CrmEntityController extends CrmEntityControllerBase {
  constructor(
    protected readonly service: CrmEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
