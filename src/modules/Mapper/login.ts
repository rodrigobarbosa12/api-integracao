import { getRepository, getManager } from 'typeorm';
import User from '../../database/entity/User';
import { hashSenha, compareHash, ExceptionError } from '../../utils';

interface UserCreate {
  name: string;
  email: string;
  password: string;
}

const signup = async (
  client: string,
  {
    name,
    email,
    password,
  }: UserCreate,
): Promise<User> => getManager(client)
  .transaction(async (transaction) => {
    const userRepository = transaction.getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (user) {
      throw ExceptionError('Usuário já cadastrado', 401);
    }

    const passwordHash = hashSenha(password);

    if (!passwordHash) {
      throw ExceptionError('Erro ao criar hash de senha', 500);
    }

    const newUsuario = userRepository
      .create({ name, email, password: passwordHash });

    await transaction.save(newUsuario);

    return newUsuario;
  });

const signin = async (
  client: string,
  email: string,
  password: string,
): Promise<User> => {
  const userRepository = getRepository(User, client);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    throw ExceptionError('Email ou senha inválidos', 401);
  }

  if (!compareHash(password, user.password)) {
    throw ExceptionError('Email ou senha inválidos', 401);
  }

  return user;
};

export default {
  signin,
  signup,
};
