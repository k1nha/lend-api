import { CategoryEntity } from "../../entity";

export interface CategoryRespository{
  create(employee: CategoryEntity): Promise<CategoryEntity | void>;
  findAll(): Promise<CategoryEntity[]>;
  update(id: string, employee: CategoryEntity): Promise<void>;
  delete(id: string): Promise<void>;
}