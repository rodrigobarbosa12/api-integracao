import { getManager } from 'typeorm';
import Contacts from '../../database/entity/Contacts';
import { ContactConverted } from '../../@types';

const create = async (
  contacts: ContactConverted[],
  client: string,
): Promise<void> => getManager(client)
  .transaction(async (transaction) => {
    const repository = transaction.getRepository(Contacts);

    const newContacts = repository.create(contacts);

    await transaction.save(newContacts);
  });

export default {
  create,
};
