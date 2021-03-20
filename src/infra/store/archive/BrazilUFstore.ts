import { Uf } from "@entities/Uf";
import { IUFStore, ICityUFStore } from "@infraS/IUBrazilFstore";

class BrazilUFstore implements IUFStore {
  private cityUF = ICityUFStore;
  private citiesUf: Uf[] = [];

  constructor(private ufCity: Uf){}

  async findAllUF(): Promise<Uf[]> {
    this.cityUF.forEach(value => {
      this.citiesUf.push(value)
    });
    return this.citiesUf
  }

  async findStateByUF(uf: string): Promise<Uf> {
    this.cityUF.forEach((value) => {
      if (value.uf === uf) {
        this.ufCity = value;
      }
    });
    return this.ufCity;
  }
}

export { BrazilUFstore };
