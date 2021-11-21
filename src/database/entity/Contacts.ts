import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Contacts {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column({ length: 200 })
    nome: string;

  @Column({ length: 20 })
    celular: string;

  @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}

export default Contacts;
