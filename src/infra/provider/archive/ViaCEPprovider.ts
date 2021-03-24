import Axios, { AxiosInstance } from 'axios'
import { ICepProvider, ICepRespProvider } from '@infraP/IViaCEPprovider'

class ViaCEPstore implements ICepProvider {
  private readonly axios: AxiosInstance
  constructor () {
    this.axios = Axios.create({
      baseURL: process.env.VIA_CEP
    })
  }

  async findAddrByCep (addrcep: string): Promise<ICepRespProvider> {
    try {
      const search = `${addrcep}/json`
      const result = await this.axios.get(search)
      return result.data
    } catch (error) {
      return error
    }
  }
}

export { ViaCEPstore }
