import { Request, Response } from 'express';
import mapper from '../Service/contacts';

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { contacts } = req.body;
    const { client } = req.user;

    const affectedRows = await mapper.create(contacts, client);
    return res.send({ message: `${affectedRows} contatos foram gravados` });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

export default {
  create,
};
