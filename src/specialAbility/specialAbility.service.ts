import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SpecialAbilityServiceBase } from "./base/specialAbility.service.base";

@Injectable()
export class SpecialAbilityService extends SpecialAbilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
