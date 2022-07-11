import {Body, Controller, Post} from "@nestjs/common";
import {WebhookActivityService} from "./webhook-activity.service";
import axios, {AxiosRequestConfig} from "axios";
const LoginWithTwitter = require('login-with-twitter');

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


    try {
      // const tw = new LoginWithTwitter({
      //   consumerKey: process.env.TWITTER_CONSUMER_KEY,
      //   consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      //   callbackUrl: 'http://localhost:3000/twitter-auth'
      // })
      // tw.login((e, tokenSecret, url)=>{
      //   console.log(tokenSecret, url)
      // })
      // const url = 'https://api.twitter.com/1.1/account_activity/webhooks/1545327075191660549/subscriptions/all.json';
      // const subscription = await axios.post(url, {
      //   oauth: {
      //     consumer_key: process.env.TWITTER_CONSUMER_KEY,
      //     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      //     token: process.env.TWITTER_ACCESS_TOKEN,
      //     token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      //     timestamp: Math.floor(Date.now() / 1000).toString(),
      //   }
      // },{
      //   headers:{        'Authorization': 'OAuth oauth_timestamp="1615466796", oauth_consumer_key="gMcPTS2EeIA7OrHLUYRLHeLBx", oauth_nonce="d31d6684-55ed-466d-8349-016bced6c94e", oauth_callback="https%2Fxxxxxx%2F%2Fxxxxxx%2F", oauth_signature_method="HMAC-SHA1", oauth_version="1.0", oauth_signature="xxxxxxxxxxxxx"'
      //   }
      // } as AxiosRequestConfig);
      // console.log(subscription)
      // const subs = await activity.getSubscriptionsCount();
      // console.log(subs)

      const isSubscribed = await activity.isSubscribed({
        userId: process.env.TWITTER_ID,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      })
      console.log('isSubscribed', isSubscribed);
      if(!isSubscribed){
        const subStatus = await activity.subscribe({
          userId: process.env.TWITTER_ID,
          accessToken: process.env.TWITTER_ACCESS_TOKEN,
          accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        });
        console.dir('subscribed',subStatus);
      }


    }catch (e){
      console.dir(e, {depth:null})
    }

  }
}