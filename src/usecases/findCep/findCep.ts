import { FindCepUseCase } from "./findCepUseCase";

class findCep {
  constructor(private findcep: FindCepUseCase) {}

  async searchAddrByCep(addrcep: any) {
    try {
      const result = await this.findcep.searchAddrByCep(addrcep);
      if (!result.localidade) {
        throw result;
      }
      return result
    } catch (error) {
      return {
        code: error.response.status,
        message: error.response.statusText,
      }
    }
  }
}

export { findCep };
