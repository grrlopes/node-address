import { Cep } from "../../entities/Cep"; //"@entities/Cep";
import { ICepProvider, ICepRespProvider } from "../../infra/provider/IViaCEPprovider"; //"@infraP/IViaCEPprovider";
import { IFindCepDTO } from "./IfindCepDTO";

class FindCepUseCase {
  constructor (private readonly cepProvider: ICepProvider) {}

  async searchAddrByCep (data: IFindCepDTO): Promise<ICepRespProvider> {
    const addrCep = new Cep(data);
    return await this.cepProvider.findAddrByCep(addrCep.addrcep);
  }
}

export { FindCepUseCase };
