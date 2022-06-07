import { Module } from "@nestjs/common";
import { CardModuleBase } from "./base/card.module.base";
import { CardService } from "./card.service";
import { CardController } from "./card.controller";
import { CardResolver } from "./card.resolver";

@Module({
  imports: [CardModuleBase],
  controllers: [CardController],
  providers: [CardService, CardResolver],
  exports: [CardService],
})
export class CardModule {}
