import { Map } from "../../entities/Map"; //"@entities/Map";
import { IMapProvider } from "../../infra/provider/IMapsprovider"; //"@infraP/IMapsprovider";

class FindMapUseCase {
  constructor (private readonly mapProvider: IMapProvider) {}

  async searchPlacebyInput (place: string) {
    const map = new Map(place);
    return await this.mapProvider.findPlacebyInput(map.place);
  }
}

export { FindMapUseCase };
