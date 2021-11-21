import mapper from '../Mapper/contacts';
import { Contact } from '../../@types';
import { maskPhone } from '../../utils';

const create = async (contacts: Contact[], client: string): Promise<number> => {
  const contactConverted = contacts.map((contact) => ({
    nome: contact.name.toUpperCase(),
    celular: client === 'macapa' ? maskPhone(contact.cellphone) : contact.cellphone,
  }));

  await mapper.create(contactConverted, client);

  return contactConverted.length;
};

export default {
  create,
};
