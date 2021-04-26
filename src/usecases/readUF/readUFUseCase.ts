import { ICityIBGEProvider, IUfIBGERespProvider } from "../../infra/provider/IIBGEprovider";

class ReadUFUseCase {
  constructor (
    private readonly cityProvider: ICityIBGEProvider,
  ) {}

  async listStateByUf (uf: string): Promise<IUfIBGERespProvider> {
    const _uf = uf.toUpperCase();
    return await this.cityProvider.findStateByUF(_uf);
  }

  async listAllStates (): Promise<IUfIBGERespProvider> {
    const ufs = await this.cityProvider.findAllUF();
    return ufs;
  }

  async listCityByUf (uf: string) {
    const city = await this.cityProvider.findCityByUF(uf);
    return city;
  }
}

export { ReadUFUseCase };
