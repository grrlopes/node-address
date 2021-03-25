import { Uf } from "../../entities/Uf"; //"@entities/Uf";
import { IUFStore } from "../../infra/store/IUBrazilFstore"; //"@infraS/IUBrazilFstore";
import { ICityIBGEProvider } from "../../infra/provider/IIBGEprovider"; //"@infraP/IIBGEprovider";

class ReadUFUseCase {
  constructor (
    private readonly ufStore: IUFStore,
    private readonly cityProvider: ICityIBGEProvider
  ) {}

  async listStateByUf (uf: string): Promise<Uf> {
    const _uf = uf.toUpperCase();
    return await this.ufStore.findStateByUF(_uf);
  }

  async listAllStates (): Promise<Uf[]> {
    const ufs = await this.ufStore.findAllUF();
    return ufs;
  }

  async listCityByUf (uf: string) {
    const city = await this.cityProvider.findCityByUF(uf);
    return city;
  }
}

export { ReadUFUseCase };
