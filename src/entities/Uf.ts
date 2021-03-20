export class Uf {
  public id?: number;
  public uf?: string;
  public state?: string;

  constructor(id?: number, state?: string, uf?: string) {
    this.id = id;
    this.state = state;
    this.uf = uf;
  }
}
