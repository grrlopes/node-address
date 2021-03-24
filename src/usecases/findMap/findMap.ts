import { FindMapUseCase } from "./findMapUseCase";
import { IFindMapDTO } from "./IfindMapDTO";

class findMap {
  constructor (private readonly findmap: FindMapUseCase) {}
  /**
   * @param {Object} place The String to place as {place: "FDTE"}
   * @returns {Object} It must return object content name, geolocation...
   **/
  async searchPlacebyInput (data: IFindMapDTO) {
    try {
      const place = this.findmap.searchPlacebyInput(data.place);
      return await place;
    } catch (error) {
      return error;
    }
  }
}

export { findMap };
