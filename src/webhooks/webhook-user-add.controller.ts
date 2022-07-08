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
    console.dir(registeredWebhooks, {depth: null});

    const subStatus = await activity.subscribe({
      userId: process.env.TWITTER_ID,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
    console.dir(subStatus);
  }
}
