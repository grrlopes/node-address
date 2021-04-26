import { Map } from "../../entities/Map";
import { IMapProvider } from "../../infra/provider/IMapsprovider";

class FindMapUseCase {
  constructor (private readonly mapProvider: IMapProvider) {}

  async searchLocation (place: string) {
    const map = new Map(place);
    return await this.mapProvider.findLocation(map.place);
  }
}

export { FindMapUseCase };
