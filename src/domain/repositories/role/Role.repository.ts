import { RoleEntity } from '../../entity/';

export interface RoleRepository {
  create(role: RoleEntity): Promise<RoleEntity | void>;
  findAll(): Promise<RoleEntity[]>;
  delete(id: string): Promise<void>;
  update(id: string, role: RoleEntity): Promise<void>;
}
