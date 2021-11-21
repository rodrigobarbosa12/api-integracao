import mapper from '../Mapper/login';
import views, { UserView } from '../../views/user';
import { createTokenJwt } from '../../utils';

interface Props {
  [x: string]: string;
}

const signup = async (params: Props): Promise<void> => {
  const {
    name,
    email,
    password,
    client,
  } = params;

  await mapper.signup(client, { name, email, password });
};

const signin = async (params: Props): Promise<[UserView, string]> => {
  const {
    email,
    password,
    client,
  } = params;

  const user = views.render(await mapper.signin(client, email, password));

  const token = createTokenJwt({ ...user, client });

  return [user, token];
};

export default {
  signin,
  signup,
};
