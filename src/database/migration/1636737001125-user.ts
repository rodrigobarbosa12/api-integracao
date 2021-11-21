import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class user1636737001125 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '30',
        },
        {
          name: 'email',
          type: 'varchar',
          length: '60',
        },
        {
          name: 'password',
          type: 'varchar',
          length: '80',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }), true);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropTable('user');
  };
}
export default user1636737001125;
