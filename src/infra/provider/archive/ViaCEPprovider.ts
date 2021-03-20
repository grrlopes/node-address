import Axios, { AxiosInstance } from "axios";
import { ICepProvider, ICepRespProvider } from "@infraP/IViaCEPprovider";

class ViaCEPstore implements ICepProvider {
  private axios: AxiosInstance;
  constructor() {
    this.axios = Axios.create({
      baseURL: "https://viacep.com.br/ws/",
    });
  }

  async findAddrByCep(addrcep: string): Promise<ICepRespProvider> {
    try {
      const search = `${addrcep}/json`;
      const result = await this.axios.get(search);
      if (!result.data) {
        throw result;
      }
      return result.data;
    } catch (error) {
      return error;
    }
  }
}

export { ViaCEPstore };
