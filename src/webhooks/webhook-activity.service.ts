import { Injectable } from "@nestjs/common";

const { userActivity } = require('twitter-webhooks');
const dotenv = require('dotenv');
dotenv.config()

@Injectable()
export class WebhookActivityService {
  async handle() {
    const a = userActivity({
      serverUrl: process.env.BASE_URL,
      route: '/webhook/twitter',
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: 'cnlSeW9qMFFLalZwMW5ERlMxYnA6MTpjaQ',
      accessTokenSecret: '41Ml5ZCbgmAdxAwoS8U6J0-6oL4XFwVj2lubeoI7KjKxhBnrDg',
      enviroment: 'AccountActivity'
    })
    console.log(a)
    return await userActivity({
      serverUrl: process.env.BASE_URL,
      route: '/webhook/twitter',
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: 'cnlSeW9qMFFLalZwMW5ERlMxYnA6MTpjaQ',
      accessTokenSecret: '41Ml5ZCbgmAdxAwoS8U6J0-6oL4XFwVj2lubeoI7KjKxhBnrDg',
      enviroment: 'AccountActivity'
    })
  }
}
