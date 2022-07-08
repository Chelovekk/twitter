import {Controller, Get, Post, Query} from "@nestjs/common";
import * as crypto from 'crypto'
import * as dotenv from 'dotenv'
dotenv.config()

@Controller('/twitter')
class TwitterController{
  @Get()
  async handleCrc(@Query('crc_token') crcToken : string){
    const hmac = crypto.createHmac('sha256', process.env.TWITTER_APPLICATION_CLIENT_SECRET).update(crcToken).digest("base64");
    console.log('twitter response');
    return { response_token:`sha256=${hmac}` }
  }
  @Post()
  async handle(){
    console.log(1);
  }
}
export default TwitterController;
