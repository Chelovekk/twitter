import {Module} from "@nestjs/common";
import {TwitterStreamsService} from "./twitter-streams.service";
import {TwitterStreamsController} from "./twitter-streams.controller";

@Module({
    imports:[],
    controllers:[TwitterStreamsController],
    providers:[TwitterStreamsService],
    exports:[TwitterStreamsService],
})
export class TwitterStreamsModule{}
