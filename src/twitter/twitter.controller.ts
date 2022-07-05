import {Controller, Get, Post} from "@nestjs/common";
import * as crypto from 'crypto'
import * as dotenv from 'dotenv'
dotenv.config()

@Controller('/twitter')
class TwitterController{
  @Get()
  async handleCrc(){
    const hmac = crypto.createHmac('sha256', process.env.TWITTER_TOKEN).update(process.env.TWITTER).digest("base64");
    console.log(1);
    return { response_token:`sha256=${hmac}` }
  }
  @Post()
  async handle(){
    console.log(1);
  }
}
export default TwitterController;
