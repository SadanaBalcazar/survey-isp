import { SetMetadata } from '@nestjs/common';

import { RolesEnum } from '../../../utils/enum/role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (role: RolesEnum) => SetMetadata(ROLES_KEY, role);
