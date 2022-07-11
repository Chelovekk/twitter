import { Injectable } from "@nestjs/common";

const { userActivity } = require('twitter-webhooks');
const dotenv = require('dotenv');

dotenv.config()

@Injectable()
export class WebhookActivityService {
  async handle() {
    // const a = userActivity({
    //   serverUrl: process.env.BASE_URL,
    //   route: '/webhook/twitter',
    //   consumerKey: process.env.TWITTER_CONSUMER_KEY,
    //   consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    //   accessToken: process.env.TWITTER_ACCESS_TOKEN,
    //   accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    //   environment: 'webhooks'
    // })
    // console.log(a)
    return await userActivity({
      serverUrl: process.env.BASE_URL,
      route: '/webhook/twitter',
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      environment: 'webhooks'
    })
  }
}
