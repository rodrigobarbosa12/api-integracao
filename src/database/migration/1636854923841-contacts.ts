import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class contacts1636854923841 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'contacts',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'nome',
          type: 'varchar',
          length: '200',
        },
        {
          name: 'celular',
          type: 'varchar',
          length: '20',
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
    await queryRunner.dropTable('contacts');
  };
}
export default contacts1636854923841;
