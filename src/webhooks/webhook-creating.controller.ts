import {Controller, Post} from "@nestjs/common";
import * as dotenv from 'dotenv';
import axios from "axios";
dotenv.config();

@Controller('webhooks')
export class WebhookCreatingController {
  @Post()
  async createWebhooks(){

  }
}
