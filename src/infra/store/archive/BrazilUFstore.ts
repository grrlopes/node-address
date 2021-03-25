import { Uf } from "../../../entities/Uf"; //'@entities/Uf'
import { IUFStore, ICityUFStore } from "../../store/IUBrazilFstore"; //'@infraS/IUBrazilFstore'

class BrazilUFstore implements IUFStore {
  private readonly cityUF = ICityUFStore
  private readonly citiesUf: Uf[] = []

  constructor (private ufCity: Uf) {}

  async findAllUF (): Promise<Uf[]> {
    this.cityUF.forEach(value => {
      this.citiesUf.push(value)
    })
    return this.citiesUf
  }

  async findStateByUF (uf: string): Promise<Uf> {
    this.cityUF.forEach((value) => {
      if (value.uf === uf) {
        this.ufCity = value
      }
    })
    return this.ufCity
  }
}

export { BrazilUFstore }
