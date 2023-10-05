
import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, AuthModule],
  controllers: [],
  providers: [],
  exports: [UsuariosModule, AuthModule],
})
export class ModulesModule {}
