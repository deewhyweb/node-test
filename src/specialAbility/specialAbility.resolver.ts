import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SpecialAbilityResolverBase } from "./base/specialAbility.resolver.base";
import { SpecialAbility } from "./base/SpecialAbility";
import { SpecialAbilityService } from "./specialAbility.service";

@graphql.Resolver(() => SpecialAbility)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SpecialAbilityResolver extends SpecialAbilityResolverBase {
  constructor(
    protected readonly service: SpecialAbilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
