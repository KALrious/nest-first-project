import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  findOne(username: string): Promis<User> {
    return user;
  }
}
