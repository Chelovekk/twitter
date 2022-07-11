import {Controller, Post} from "@nestjs/common";
import * as dotenv from 'dotenv';
const { userActivity } = require('twitter-webhooks');
dotenv.config();

@Controller('webhooks')
export class WebhookCreatingController {
  @Post()
  async createWebhooks(){
      const activity = await userActivity({
        serverUrl: process.env.BASE_URL,
        route: '/webhook/twitter',
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        environment: 'webhooks'
      })
    const webhook = await activity.register();
    console.log(webhook);
    return {webhook};
  }
}
