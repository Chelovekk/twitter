import {Body, Controller, Get, Post, Query, Req} from "@nestjs/common";
import * as crypto from 'crypto'
import * as dotenv from 'dotenv'
dotenv.config()

@Controller('/twitter')
class TwitterController{
  @Get()
  async handleCrc(@Query('crc_token') crcToken : string){
    const hmac = crypto.createHmac('sha256', process.env.TWITTER_CONSUMER_SECRET).update(crcToken).digest("base64");
    console.log('twitter response');
    console.log(crcToken, hmac);
    return { "response_token": `sha256=${hmac}` }
  }
  @Post()
    async handle(@Body() body : object){
    console.dir(body, {depth:null});
  }
}
export default TwitterController;
