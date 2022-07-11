import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RouterModule, Routes} from "@nestjs/core";
import {TwitterStreamsModule} from "./twitter-steams/twitter-streams.module";

const routes: Routes = [
  { path: '/streams', module: TwitterStreamsModule },
]

@Module({
  imports: [
    TwitterStreamsModule,
    RouterModule.register(routes)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
