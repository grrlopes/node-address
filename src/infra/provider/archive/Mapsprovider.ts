import Axios, { AxiosInstance } from "axios";
import { IMapProvider } from "../../provider/IMapsprovider"; //"@infraP/IMapsprovider";

class MAPSprovider implements IMapProvider {
  private readonly axios: AxiosInstance;
  constructor () {
    this.axios = Axios.create({
      baseURL: `${process.env.GOOGLE_MAPS_URL}=
      ${process.env.GOOGLE_MAPS_API_KEY}&input=`
    });
  }

  async findPlacebyInput (place: string): Promise<any> {
    try {
      const search = place;
      const result = await this.axios.get(search);
      return result.data;
    } catch (error) {
      return {
        code: error.response.status,
        msg: error.response.statusText
      };
    }
  }
}

export { MAPSprovider };
