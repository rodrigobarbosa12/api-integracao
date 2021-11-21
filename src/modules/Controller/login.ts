import { Request, Response } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import service from '../Service/login';

const validateSignup = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().max(30),
    email: Joi.string().required(),
    password: Joi.string().required().min(8).messages({
      'string.empty': 'A senha deve conter no mínimo 8 caracteres',
      'string.min': 'A senha deve conter no mínimo 8 caracteres',
    }),
    client: Joi.string().required().messages({
      'string.empty': 'O client deve ser "varejao" ou "macapa"',
      'string.min': 'O client deve ser "varejao" ou "macapa"',
    }),
  }),
});

const validateSignin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().messages({
      'string.empty': 'Email é obrigatório',
      'string.min': 'Email é obrigatório',
      'any.required': 'Email é obrigatório',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'Senha é obrigatória',
      'string.min': 'Senha é obrigatória',
      'any.required': 'Senha é obrigatória',
    }),
    client: Joi.string().required(),
  }),
});

const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    await service.signup(req.body);
    return res.send({ message: 'Usuário cadastrado!' });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

const signin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { client } = req.body;

    const [user, token] = await service.signin(req.body);

    return res.send({ user, [`${client}Token`]: token });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

export default {
  validateSignin,
  validateSignup,
  signup,
  signin,
};
