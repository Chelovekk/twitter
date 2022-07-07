import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TwitterModule} from "./twitter/twitter.module";
import {RouterModule, Routes} from "@nestjs/core";
import {WebhooksModule} from "./webhooks/webhooks.module";

const routes: Routes = [
  { path: '/webhook', module: TwitterModule },
  { path: '/webhooks', module: WebhooksModule }
]

@Module({
  imports: [
    TwitterModule,
    WebhooksModule,
    RouterModule.register(routes)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
