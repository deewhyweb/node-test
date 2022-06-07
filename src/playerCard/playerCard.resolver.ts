import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PlayerCardResolverBase } from "./base/playerCard.resolver.base";
import { PlayerCard } from "./base/PlayerCard";
import { PlayerCardService } from "./playerCard.service";

@graphql.Resolver(() => PlayerCard)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlayerCardResolver extends PlayerCardResolverBase {
  constructor(
    protected readonly service: PlayerCardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
