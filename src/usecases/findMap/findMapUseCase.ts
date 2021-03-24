import { Map } from "@entities/Map";
import { IMapProvider } from "@infraP/IMapsprovider";

class FindMapUseCase {
  constructor (private readonly mapProvider: IMapProvider) {}

  async searchPlacebyInput (place: string) {
    const map = new Map(place);
    return await this.mapProvider.findPlacebyInput(map.place);
  }
}

export { FindMapUseCase };
