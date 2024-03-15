import { SetMetadata } from '@nestjs/common';
import { Claim } from './claim.enum';

export const PERMISSION_KEY = 'pr_key';
export const Permissions = (...permissions: Claim[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
