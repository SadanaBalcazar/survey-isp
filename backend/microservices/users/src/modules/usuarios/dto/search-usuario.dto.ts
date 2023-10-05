import { IsOptional, IsEmail, IsNotEmpty, IsIn } from 'class-validator';

export class SearchUsersDto {
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly primerNombre?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly segundoNombre?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly primerApellido?: string;

  @IsOptional()
  @IsNotEmpty()
  readonly segundoApellido?: string;

}
