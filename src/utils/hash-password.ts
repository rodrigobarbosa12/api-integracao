import bcrypt from 'bcrypt';

const saltRounds = bcrypt.genSaltSync(10);

export const hashSenha = (password: string): string => bcrypt
  .hashSync(password, saltRounds);

export const compareHash = (password: string, encrypted: string): boolean => bcrypt
  .compareSync(password, encrypted);

export default saltRounds;
