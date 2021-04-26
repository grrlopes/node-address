import { FindMapUseCase } from "./findMapUseCase";
import { IFindMapDTO } from "./IfindMapDTO";

class findMap {
  constructor (private readonly findmap: FindMapUseCase) {}
  /**
   * @param {Object} place The String to place as {place: "FDTE"}
   * @returns {Object} It must return object content name, geolocation...
   **/
  async searchLocation (data: IFindMapDTO): Promise<any> {
    try {
      const place = await this.findmap.searchLocation(data.place);
      return place;
    } catch (error) {
      return error;
    }
  }
}

export { findMap };
