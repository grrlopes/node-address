import { FindMapUseCase } from "./findMapUseCase";
import { IFindMapDTO } from "./IfindMapDTO";

class findMap {
  constructor(private findmap: FindMapUseCase) {}

  async searchPlacebyInput(data: IFindMapDTO) {
    try {
      const place = this.findmap.searchPlacebyInput(data.place);
      return place;
    } catch (error) {
      return error;
    }
  }
}

export { findMap };
