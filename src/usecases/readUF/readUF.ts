import { Uf } from '@entities/Uf'
import { ReadUFUseCase } from './readUFUseCase'

class ReadUF {
  constructor (private readonly readUFUsecase: ReadUFUseCase) {}

  /**
   * @param {String} uf The string param
   * @returns {Object} an object e.g
   * { id: 49, state: 'Sao Paulo', uf: 'SP' }
  **/
  async listStateByUf (uf: string): Promise<Uf> {
    const state = await this.readUFUsecase.listStateByUf(uf)
    return state
  }

  /**
   * @param {Empty} empty It should be empty param
   * @returns {Array} an array e.g [ { id: 1, state: 'Acre', uf: 'AC' } ]
  **/
  async listAllStates (): Promise<Uf[]> {
    const states = await this.readUFUsecase.listAllStates()
    return states
  }

  /**
   * @param {String} uf It should be empty param
   * @returns It will return a array e.g [ { id: 350010505, nome: 'Adamantina'...]
  **/
  async listCityByUf (uf: string) {
    const city = await this.readUFUsecase.listCityByUf(uf)
    return city
  }
}

export { ReadUF }
