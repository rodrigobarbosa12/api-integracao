import User from '../database/entity/User';

export interface UserView {
  id: number;
  email: string,
}

const render = (user: User): UserView => ({
  id: user.id,
  email: user.email,
});

export default {
  render,
};
