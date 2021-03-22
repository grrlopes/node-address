import { Cep } from '@entities/Cep'
import { ICepProvider, ICepRespProvider } from '@infraP/IViaCEPprovider'
import { IFindCepDTO } from './IfindCepDTO'

class FindCepUseCase {
  constructor (private readonly cepProvider: ICepProvider) {}

  async searchAddrByCep (data: IFindCepDTO) {
    const addrCep = new Cep(data)
    return await this.cepProvider.findAddrByCep(addrCep.addrcep)
  }
}

export { FindCepUseCase }
