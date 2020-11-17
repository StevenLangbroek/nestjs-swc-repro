import { Query, Resolver } from '@nestjs/graphql';
import { v4 } from 'uuid';
import { Post } from './post.type';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => Post, {
    name: 'post',
  })
  findOne() {
    return {
      id: v4(),
      title: 'Test',
    };
  }
}
