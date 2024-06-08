import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrmEntityModuleBase } from "./base/crmEntity.module.base";
import { CrmEntityService } from "./crmEntity.service";
import { CrmEntityController } from "./crmEntity.controller";
import { CrmEntityResolver } from "./crmEntity.resolver";

@Module({
  imports: [CrmEntityModuleBase, forwardRef(() => AuthModule)],
  controllers: [CrmEntityController],
  providers: [CrmEntityService, CrmEntityResolver],
  exports: [CrmEntityService],
})
export class CrmEntityModule {}
