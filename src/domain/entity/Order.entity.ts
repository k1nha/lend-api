type Order = {
  date: Date;
  shift: string; //turma
  class: string; //class
  devolution?: Date;
  delivery_by: string;
  returned_by: string;
};

export class OrderEntity {
  public date: Date;
  public shift: string; //turma
  public class: string; //class
  public devolution?: Date | null;
  public delivery_by: string;
  public returned_by: string;

  constructor({
    class: classes,
    date,
    delivery_by,
    returned_by,
    shift,
    devolution,
  }: Order) {
    this.date = date;
    this.shift = shift;
    this.class = classes;
    this.devolution = devolution ?? null;
    this.delivery_by = delivery_by;
    this.returned_by = returned_by;
  }
}
