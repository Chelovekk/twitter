import {Module} from "@nestjs/common";
import {WebhookCreatingController} from "./webhook-creating.controller";
import {WebhookUserAddController} from "./webhook-user-add.controller";
import {WebhookActivityService} from "./webhook-activity.service";

@Module({
  imports:[],
  controllers:[WebhookCreatingController, WebhookUserAddController],
  providers:[WebhookActivityService],
  exports:[WebhookActivityService],
})
export class WebhooksModule{}
