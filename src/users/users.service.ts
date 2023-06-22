import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IPostUser } from './users.interface';

@Injectable()
export class UsersService {
  private fakeUser = [
    { name: 'denis', email: 'denis@gmail.com' },
    { name: 'wayne', email: 'wayne@gmail.com' },
  ];

  async fetchUsers() {
    return this.fakeUser;
  }

  isEmailAlreadyExists(email) {
    return this.fakeUser.some((user) => user.email === email);
  }

  async postUser(user: IPostUser) {
    const emailToCheck = user.email;
    const emailExists = this.isEmailAlreadyExists(emailToCheck);

    if (emailExists)
      throw new HttpException('ya existe wachin', HttpStatus.UNAUTHORIZED);
    this.fakeUser.push(user);
    return this.fakeUser;
  }

  async fetchUser(id: number) {
    return this.fakeUser[id];
  }
}
