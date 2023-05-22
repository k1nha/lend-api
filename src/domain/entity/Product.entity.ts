type Product = {
  patrimony_key: string;
  name: string;
  descriptions?: string;
  category_id: string;
};

export class ProductEntity {
  public patrimony_key: string;
  public name: string;
  public descriptions?: string | null;
  public category_id: string;
  constructor({ category_id, name, patrimony_key, descriptions }: Product) {
    this.patrimony_key = patrimony_key;
    this.name = name;
    this.descriptions = descriptions ?? null;
    this.category_id = category_id;
  }
}
