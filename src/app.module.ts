import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TwitterModule} from "./twitter/twitter.module";
import {RouterModule, Routes} from "@nestjs/core";

const routes: Routes = [
  {path: '/webhook', module: TwitterModule}
]

@Module({
  imports: [
    TwitterModule,
    RouterModule.register(routes)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
