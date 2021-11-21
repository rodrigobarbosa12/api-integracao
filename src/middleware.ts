import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { authConfig } from './utils';

interface Decoded {
  id: number;
  email: string;
  client: string;
}

const freeAccess = (originalUrl: string) => {
  switch (originalUrl) {
    case '/signup':
      return true;
    case '/signin':
      return true;

    default:
      return false;
  }
};

const middleware = (req: Request, res: Response, next: NextFunction): void => {
  if (freeAccess(req.path)) {
    next();
    return;
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send({ message: 'Você não está autorizado' });
    return;
  }

  // Bearer lkasdjfksdfaDJKÇLÇLKASDA
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    res.status(401).send({ message: 'Token error' });
    return;
  }

  const [schema, token] = parts;

  // Verifica se Schema tem a palavra Bearer
  if (!/^Bearer$/i.test(schema)) {
    res.status(401).send({ message: 'Token mal formado' });
    return;
  }

  // verifica token
  jwt.verify(token, authConfig.secret, (err: VerifyErrors | null, decoded: Decoded): void => {
    if (err) {
      res.status(401).send({ message: 'Token invalido' });
      return;
    }

    req.user = {
      id: decoded.id,
      email: decoded.email,
      client: decoded.client,
    };

    next();
  });
};

export default middleware;
