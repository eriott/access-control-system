import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { IconModule } from './api/icon/icon.module'

@Module({
  imports: [
    IconModule
  ],
  providers: [],
  controllers: [AppController]
})

export class AppModule {
}
