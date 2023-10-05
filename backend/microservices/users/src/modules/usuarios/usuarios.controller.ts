import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  UseGuards,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SearchUsersDto } from './dto/search-usuario.dto';

import { UsuarioEntity } from './entities/usuario.entity';

import { RolesEnum } from '../../utils/enum/role.enum';

import { UsuariosService } from './usuarios.service';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  hola(){
    return 'Hola Mundo'
  }
// activar esto
  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(RolesEnum.ADMIN)
  @Post('nuevo')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.crearUsuario(createUsuarioDto);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(RolesEnum.ADMIN)
  @Get('listar')
  findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.usuariosService.findAll(page, limit);
  }

  @Get(':uuid')
  async findInfoUserByUuid(@Param('uuid') uuid: string){
    try {
      return await this.usuariosService.findInfoUserByUuid(uuid);
      // const usuario: UsuarioEntity = await this.usuariosService.findInfoUserByUuid(uuid);
      // return usuario
    } catch (error) {
      throw new NotFoundException('No fue encontrado el usuario')
    }
  }

  // @UseGuards(AuthGuard, RolesGuard)
  @Get('perfil')
  async profile(@Request() req: any) {
    try {
      const uuid = req.user.sub;
      console.log(uuid)
      return await this.usuariosService.findInfoPerfilUser(uuid);
      
    } catch (error) {
      throw new NotFoundException('Perfil - No fue encontrado el usuario')
      
    }
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(RolesEnum.ADMIN)
  @Delete(':uuid')
  async softDeleteUser(@Param('uuid') uuidUser: string) {
    try {
      return await this.usuariosService.softDeleteUser(uuidUser);
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  // @UseGuards(AuthGuard, RolesGuard)
  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    try {
      await this.usuariosService.updateUser(uuid, updateUsuarioDto);
      return 'Datos Actualizados'
      // return updatedUserMessage;
    } catch (error) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }


  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(RolesEnum.ADMIN)
  @Patch('changePass/:uuid')
  async changePassword(
    @Param('uuid') uuid: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    try {
      await this.usuariosService.changePassword(uuid, updateUsuarioDto);
      // return changePasswordMessage;
      return 'Contraseña actualizada'
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(RolesEnum.ADMIN)
  @Get('search')
  async searchUsers(@Query() busqueda: SearchUsersDto) {
    try {
      return this.usuariosService.searchUser(busqueda);
    } catch (error) {
      throw new NotFoundException('No se pudo procesas su petición');
    }
  }
}
