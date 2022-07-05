import {Module} from "@nestjs/common";
import TwitterController from "./twitter.controller";

@Module({
  controllers:[TwitterController],
  providers:[],
  imports:[],
  exports:[]
})
export class TwitterModule{}
