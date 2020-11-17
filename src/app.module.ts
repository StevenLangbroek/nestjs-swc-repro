import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/post.module';

@Module({
  imports: [
    PostModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: './schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
