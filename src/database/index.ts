import 'reflect-metadata';
import { createConnections } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const patch = process.env.NODE_ENV === 'development'
  ? `${__dirname}/entity/*.ts`
  : `${__dirname}/entity/*.js`;

createConnections([
  {
    name: 'macapa',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'admin',
    database: 'admin',
    entities: [patch],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
  },
  {
    name: 'varejao',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'admin',
    entities: [patch],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
  },
])
  .then((connections) => {
    connections.forEach((connection) => {
      if (connection.isConnected) {
        console.log(`Banco ${connection.name} conectado!`);
      }
    });
  })
  .catch((error) => console.log(error));
