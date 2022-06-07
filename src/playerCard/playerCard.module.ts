import { Module } from "@nestjs/common";
import { PlayerCardModuleBase } from "./base/playerCard.module.base";
import { PlayerCardService } from "./playerCard.service";
import { PlayerCardController } from "./playerCard.controller";
import { PlayerCardResolver } from "./playerCard.resolver";

@Module({
  imports: [PlayerCardModuleBase],
  controllers: [PlayerCardController],
  providers: [PlayerCardService, PlayerCardResolver],
  exports: [PlayerCardService],
})
export class PlayerCardModule {}
