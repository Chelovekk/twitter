import {Body, Controller, Get, Post, Delete, Param} from "@nestjs/common";
import axios from "axios";
import * as dotenv from 'dotenv'
import * as tw from 'twitter-api-sdk'
import {IsNumberString, IsOptional, IsString} from "class-validator";
dotenv.config();

class RulesBody{
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  rules?:string;
}

@Controller('rules')
export class TwitterStreamsController{
  @Get()
  async getRules(){
    const rules = await axios.get('https://api.twitter.com/2/tweets/search/stream/rules', {
      headers: {
        'Authorization': 'Bearer '+process.env.TWITTER_BEARER,
      },
    })
    return rules.data;
  }
  @Post()
  async addUserToReading(@Body() rulesBody: RulesBody){
    const data = {
      add: [{
        value: 'from:' + rulesBody.username + rulesBody.rules,
      }],
    }
    console.log(data);
    const response = await axios.post('https://api.twitter.com/2/tweets/search/stream/rules', data, {
      headers:{
        'Authorization': `Bearer ${process.env.TWITTER_BEARER}`,
      },
    });

    return response.data;
  }
  @Delete('/:ruleId')
  async deleteUser(@Param('ruleId') ruleId: string){
    const data = {
      delete: {
        ids: [ruleId],
      },
    }
    console.log(data)
    const result = await axios.post('https://api.twitter.com/2/tweets/search/stream/rules', data, {
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_BEARER}`,
      },
    })
    return result.data;
  }
}
