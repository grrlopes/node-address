import { FindCepUseCase } from "./findCepUseCase";

class findCep {
  constructor (private readonly findcep: FindCepUseCase) {}
  /**
   * @param {String} addrcep The String to cep like 01501-000
   * @returns {Object} It shall return object content cep, address and son on
   **/
  async searchAddrByCep (addrcep: any) {
    try {
      const result = await this.findcep.searchAddrByCep(addrcep);
      if (!result.localidade) {
        throw result;
      }
      return result;
    } catch (error) {
      return {
        code: error.response.status,
        message: error.response.statusText
      };
    }
  }
}

export { findCep };
