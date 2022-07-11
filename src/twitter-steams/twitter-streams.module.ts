import {Module} from "@nestjs/common";
import {TwitterStreamsService} from "./twitter-streams.service";

@Module({
    imports:[],
    providers:[TwitterStreamsService],
    exports:[TwitterStreamsService],
})
export class TwitterStreamsModule{}