import * as nestMorgan from "nest-morgan";
import * as errors from "../errors";
import { User } from "./base/User";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { UserFindManyArgs } from "./base/UserFindManyArgs";
import { Request } from "express";
import { UserWhereInput } from "./base/UserWhereInput";
import { isRecordNotFoundError } from "../prisma.util";
import { ApiNestedQuery } from "../decorators/api-nested-query.decorator";
import { plainToClass } from "class-transformer";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { UserCreateInput } from "./base/UserCreateInput";
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import {
  AuthenticatedUser, Roles
} from 'nest-keycloak-connect';
import { RolesBuilder } from "nest-access-control";
import { argsToArgsConfig } from "graphql/type/definition";
import { UserFindUniqueArgs } from "./base/UserFindUniqueArgs";
import { Param } from "@nestjs/common";
import { UserUpdateInput } from "./base/UserUpdateInput";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }


  @common.Post("/keycloak")
  @Roles({ roles:['user']})
  @swagger.ApiCreatedResponse({ type: User })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    console.log("creating a new User")
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        keycloakid: true,
        lastName: true,
        roles: true,
        roninwalletaddress: true,
        updatedAt: true,
        username: true,
      },
    });
  }


  @Roles({ roles:['user']})
  @common.Patch("/keycloak/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async updateUser(@AuthenticatedUser()
  user: any,
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    console.log("inside update user");
    if(data.keycloakid == user.sub)
    {
      console.log("keycloak user is " + user.sub);
      try {
        return await this.service.update({
          where: params,
          data: data,
          select: {
            createdAt: false,
            firstName: false,
            id: true,
            keycloakid: false,
            lastName: false,
            roles: false,
            roninwalletaddress: true,
            updatedAt: true,
            username: false,
          },
        });
      } catch (error) {
        if (isRecordNotFoundError(error)) {
          throw new errors.NotFoundException(
            `No resource was found for ${JSON.stringify(params)}`
          );
        }
        throw error;
      }
    }
    else{
      return null;
    }
    
  }


  @Roles({ roles:['user']})
  @common.Get("/keycloak/:keycloakid")
  @swagger.ApiOkResponse({ type: [User] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserFindManyArgs)
  async findBySub(@Param('keycloakid') sub: string): Promise<User[]> {
    console.log("inside keycloak find by keycloak subject")
    return this.service.findMany({
      where: { keycloakid: sub},
    });
  }
}


