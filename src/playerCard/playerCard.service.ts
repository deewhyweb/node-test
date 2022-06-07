import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PlayerCardServiceBase } from "./base/playerCard.service.base";

@Injectable()
export class PlayerCardService extends PlayerCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
