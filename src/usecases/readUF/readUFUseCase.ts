import { Uf } from '@entities/Uf'
import { IUFStore } from '@infraS/IUBrazilFstore'

class ReadUFUseCase {
  constructor (private readonly ufStore: IUFStore) {}

  async listStateByUf (uf: string): Promise<Uf> {
    const _uf = uf.toUpperCase()
    return await this.ufStore.findStateByUF(_uf)
  }

  async listAllStates (): Promise<Uf[]> {
    const ufs = await this.ufStore.findAllUF()
    return ufs
  }
}

export { ReadUFUseCase }
