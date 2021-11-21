import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column({ length: 30 })
    name: string;

  @Column({ length: 60 })
    email: string;

  @Column({ length: 80 })
    password: string;

  @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}

export default User;
