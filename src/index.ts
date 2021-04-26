import { findcep } from "./usecases/findCep";
import { readUF } from "./usecases/readUF";
import { findmap } from "./usecases/findMap";
export { findcep } from "./usecases/findCep";

export { readUF } from "./usecases/readUF";

export { findmap } from "./usecases/findMap";

/**
 * Class should be used by fieldlink-backend.
 **/
class address {
  /**
   * @param {String} cep The String to cep e.g "01501-000"
   * @returns {Object} It shall return object content cep, address and son on
   **/
  async searchAddrByCep (cep: string) {
    return await findcep.searchAddrByCep(cep);
  }

  /**
   * @param {Empty} empty It should be empty param
   * @returns {Array} an array e.g
   * [ { id: 1, state: 'Acre', uf: 'AC' } ]
   **/
  async listAllStates () {
    return await readUF.listAllStates();
  }

  /**
   * @param {String} uf It should be empty param
   * @returns It will return a array e.g
   * [ { id: 350010505, nome: 'Adamantina'...]
   **/
  async listCityByUf (uf: string) {
    return await readUF.listCityByUf(uf);
  }

  /**
   * @param {String} uf The string param
   * @returns {Object} an object e.g
   * { id: 49, state: 'Sao Paulo', uf: 'SP' }
   **/
  async listStateByUf (uf: string) {
    return await readUF.listStateByUf(uf);
  }

  /**
   * @param {Object} place The String to place as {place: "FDTE"}
   * @returns {Object} It must return object content name, geolocation...
   **/
  async searchPlacebyInput (place: string) {
    return await findmap.searchLocation({ place: place });
  }
}

export { address };
