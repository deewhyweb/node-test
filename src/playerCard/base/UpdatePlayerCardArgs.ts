/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { PlayerCardWhereUniqueInput } from "./PlayerCardWhereUniqueInput";
import { PlayerCardUpdateInput } from "./PlayerCardUpdateInput";

@ArgsType()
class UpdatePlayerCardArgs {
  @Field(() => PlayerCardWhereUniqueInput, { nullable: false })
  where!: PlayerCardWhereUniqueInput;
  @Field(() => PlayerCardUpdateInput, { nullable: false })
  data!: PlayerCardUpdateInput;
}

export { UpdatePlayerCardArgs };