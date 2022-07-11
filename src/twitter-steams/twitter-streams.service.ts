import { Injectable, OnModuleInit } from "@nestjs/common";
import axios from "axios";
import * as needle from 'needle'
import * as dotenv from 'dotenv';
import  Client from 'twitter-api-sdk'
dotenv.config();

@Injectable()
export class TwitterStreamsService implements OnModuleInit{
     client: Client;
     constructor() {
          this.client = new Client(process.env.TWITTER_BEARER);
     }
     onModuleInit(){
          console.log('smth')
          this.startStream();
     }
     startStream(){
          console.log(1)
          const stream = needle.get('https://api.twitter.com/2/tweets/search/stream',{
               headers:{
                    'User-Agent':'v2SampleStreamJS',
                    'Authorization': `Bearer ${process.env.TWITTER_BEARER}`,
               },
          })
          console.log('stream started', stream);

          stream.on('data', data => {
               try {
                    console.log(data.toString());
               } catch (error) {
                    console.log(error);
                    this.reconnect();
               }
          })
              .on('err', error => {
                   console.log('reconnecting...');
                   setTimeout(()=>{
                        this.reconnect();
                   }, 3000)
              })
     }
     reconnect(){
          this.startStream();
     }
}