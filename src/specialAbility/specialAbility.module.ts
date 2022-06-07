import { Module } from "@nestjs/common";
import { SpecialAbilityModuleBase } from "./base/specialAbility.module.base";
import { SpecialAbilityService } from "./specialAbility.service";
import { SpecialAbilityController } from "./specialAbility.controller";
import { SpecialAbilityResolver } from "./specialAbility.resolver";

@Module({
  imports: [SpecialAbilityModuleBase],
  controllers: [SpecialAbilityController],
  providers: [SpecialAbilityService, SpecialAbilityResolver],
  exports: [SpecialAbilityService],
})
export class SpecialAbilityModule {}
