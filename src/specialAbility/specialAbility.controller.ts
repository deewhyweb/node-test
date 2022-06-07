import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpecialAbilityService } from "./specialAbility.service";
import { SpecialAbilityControllerBase } from "./base/specialAbility.controller.base";

@swagger.ApiTags("specialAbilities")
@common.Controller("specialAbilities")
export class SpecialAbilityController extends SpecialAbilityControllerBase {
  constructor(
    protected readonly service: SpecialAbilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
