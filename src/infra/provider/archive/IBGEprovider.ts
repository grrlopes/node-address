import Axios, { AxiosInstance } from 'axios'
import { ICityIBGEProvider, ICityIBGERespProvider, IUfIBGERespProvider } from "../../provider/IIBGEprovider"; //'@infraP/IIBGEprovider'

class IBGEprovider implements ICityIBGEProvider {
  private readonly axios: AxiosInstance
  constructor () {
    this.axios = Axios.create({
      baseURL: process.env.IBGE_URL
    })
  }
  async findAllUF(): Promise<IUfIBGERespProvider> {
    try {
      const result = await this.axios.get("");
      return result.data
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText
      }
    }
  }

  async findCityByUF (addrcep: string): Promise<ICityIBGERespProvider> {
    try {
      const search = `${addrcep}/distritos`
      const result = await this.axios.get(search)
      return result.data
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText
      }
    }
  }
}

export { IBGEprovider }
