import { Uf } from '@entities/Uf'
import { ReadUFUseCase } from './readUFUseCase'

class ReadUF {
  constructor (private readonly readUFUsecase: ReadUFUseCase) {}

  async listStateByUf (uf: string): Promise<Uf> {
    const state = await this.readUFUsecase.listStateByUf(uf)
    return state
  }

  async listAllStates (): Promise<Uf[]> {
    const states = await this.readUFUsecase.listAllStates()
    return states
  }
}

export { ReadUF }
