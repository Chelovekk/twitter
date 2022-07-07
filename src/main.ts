import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import axios from "axios";

const LoginWithTwitter = require('login-with-twitter');
const twitterWebhooks = require('twitter-webhooks');

const {userActivity} = require('twitter-webhooks');

async function bootstrap() {

  // const callbackUrl = 'http://localhost:3000/twitter-auth'
  //
  // const tw = new LoginWithTwitter({
  //   consumerKey: process.env.TWITTER_CONSUMER_KEY,
  //   consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  //   callbackUrl,
  // })
  //
  // tw.login(async (e, tokenSecret, url) => {
  //   if (e) console.log(e)
  //   console.log(tokenSecret, url)
  //

  // let regStatus = await activity.register('http://localhost:3000/twitter-auth');
    // console.log(regStatus);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  try {
    const activity = await userActivity({
      serverUrl: 'localhost:3000',
      route: '/webhook/twitter',
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      environment: 'webhooks'
    })
    let a = await activity.getWebhooks();
    console.log(a)
    let webhook = await activity.register();
    console.log(webhook)
  } catch (e){
    console.log(e);
  }

}

bootstrap();
