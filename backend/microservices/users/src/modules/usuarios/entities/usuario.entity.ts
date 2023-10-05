import { RolesEnum } from '../../../utils/enum/role.enum';
import { EstadoUsuarioEnum } from '../../../utils/enum/estadosUsuarios.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidUsuario: string;

  @Column({ unique: true, nullable: false })
  @Column()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  nombres: string;

  @Column({ nullable: false })
  apellidos: string;

  @Column({
    type: 'enum',
    enum: EstadoUsuarioEnum,
    default: EstadoUsuarioEnum.Activo,
  })
  estado: string;

  @CreateDateColumn({ type: 'date' })
  fechaCreado: Date;

  @Column({ type: 'time' })
  horaCreado: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updated: Date;
}
