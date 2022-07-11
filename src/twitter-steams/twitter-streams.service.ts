import { Injectable, OnModuleInit } from "@nestjs/common";
import axios from "axios";
import * as needle from 'needle'
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class TwitterStreamsService implements OnModuleInit{
     onModuleInit(){
          console.log('smth')
          this.startStream();
     }
      async startStream(){
          console.log(1)
          const stream = needle.get('https://api.twitter.com/2/tweets/search/stream', {
               headers:{
                    'User-Agent':'v2SampleStreamJS',
                    'Authorization': `Bearer ${process.env.TWITTER_BEARER}`,
               },
          })
       // const stream = await axios.get('https://api.twitter.com/2/tweets/search/stream', {
       //   headers:{
       //
       //   },
       //   responseType: 'stream'
       // })

          stream.on('data', data => {
               try {
                 console.log(data, typeof data)
                 console.log(data.toString().trim().length)
                    if(data.toString().trim().length){
                      console.log(JSON.parse(data.toString()))
                      console.log(JSON.parse(data.toString()).data.text);
                      axios.post('https://discord.com/api/webhooks/939096024943824906/2G1mop2CoJW9kh7hhYgG0JwMuZlb-XP3VC42QOMG3-pzxZHwzDgYvMcZAmD-l44Pn-mb', {
                        content: JSON.parse(data.toString()).data.text
                      })
                    }

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
