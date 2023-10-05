import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const pgServices = [
  ConfigModule.forRoot({ isGlobal: true, cache: true }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRESQL_HOST,
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
  }),
];
