import {Body, Controller, Post} from "@nestjs/common";
import {WebhookActivityService} from "./webhook-activity.service";

@Controller('/users')
export class WebhookUserAddController{
  constructor(private webhookActivityService: WebhookActivityService) {
  }

  @Post()
  async addUser(@Body() username : string){
    console.log(username);
    const activity = await this.webhookActivityService.handle();
    const registeredWebhooks = await activity.getWebhooks();
    console.log(registeredWebhooks);
  }
}
