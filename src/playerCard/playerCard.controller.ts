import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlayerCardService } from "./playerCard.service";
import { PlayerCardControllerBase } from "./base/playerCard.controller.base";

@swagger.ApiTags("playerCards")
@common.Controller("playerCards")
export class PlayerCardController extends PlayerCardControllerBase {
  constructor(
    protected readonly service: PlayerCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
