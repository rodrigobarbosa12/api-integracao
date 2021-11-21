import jwt from 'jsonwebtoken';
import authConfig from './auth-config';

const createTokenJwt = (params: string | object): string => jwt.sign(
  params,
  authConfig.secret,
  {
    expiresIn: authConfig.expiresIn,
  },
);

export default createTokenJwt;
