import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TwitterModule} from "./twitter/twitter.module";
import {RouterModule, Routes} from "@nestjs/core";
import {WebhooksModule} from "./webhooks/webhooks.module";
import {TwitterStreamsModule} from "./twitter-steams/twitter-streams.module";

const routes: Routes = [
  { path: '/webhook', module: TwitterModule },
  { path: '/webhooks', module: WebhooksModule }
]

@Module({
  imports: [
    TwitterModule,
    TwitterStreamsModule,
    WebhooksModule,
      TwitterModule,
    RouterModule.register(routes)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
