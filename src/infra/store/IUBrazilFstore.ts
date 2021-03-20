import { Uf } from "@entities/Uf";

enum ECityUF {
  AC, "Acre",
  AL, "Alagoas",
  AP, "Amapa",
  AM, "Amazonas",
  BA, "Bahia",
  CE, "Ceara",
  DF, "Distrito Federal",
  ES, "Espirito Santo",
  GO, "Goias",
  MA, "Maranhao",
  MS, "Mato Grosso do Sul",
  MT, "Mato Grosso",
  MG, "Minas Gerais",
  PA, "Para",
  PB, "Paraiba",
  PR, "Parana",
  PE, "Pernambuco",
  PI, "Piaui",
  RJ, "Rio de Janeiro",
  RN, "Rio Grande do Norte",
  RS, "Rio Grande do Sul",
  RO, "Rondonia",
  RR, "Roraima",
  SC, "Santa Catarina",
  SP, "Sao Paulo",
  SE, "Sergipe",
  TO, "Tocantins",
}

interface ICity {
  id: ECityUF;
  state: string;
  uf: string;
}

const ICityUFStore: Map<any, ICity> = new Map([
  [ECityUF.Acre, { id: ECityUF.Acre, state: "Acre", uf: "AC" }],
  [ECityUF.Alagoas, { id: ECityUF.Alagoas, state: "Alagoas", uf: "AL" }],
  [ECityUF.Amapa, { id: ECityUF.Amapa, state: "Amapa", uf: "AP" }],
  [ECityUF.Amazonas, { id: ECityUF.Amazonas, state: "Amazonas", uf: "AM" }],
  [ECityUF.Bahia, { id: ECityUF.Bahia, state: "Bahia", uf: "BA" }],
  [ECityUF.Ceara, { id: ECityUF.Ceara, state: "Ceara", uf: "CE" }],
  [ECityUF["Distrito Federal"], { id: ECityUF["Distrito Federal"], state: "Distrito Federal", uf: "DF" }],
  [ECityUF["Espirito Santo"], { id: ECityUF["Espirito Santo"], state: "Espirito Santo", uf: "ES" }],
  [ECityUF.Goias, { id: ECityUF.Goias, state: "Goias", uf: "GO" }],
  [ECityUF.Maranhao, { id: ECityUF.Maranhao, state: "Maranhao", uf: "MA" }],
  [ECityUF["Mato Grosso do Sul"], { id: ECityUF["Mato Grosso do Sul"], state: "Mato Grosso do Sul", uf: "MS" }],
  [ECityUF["Mato Grosso"], { id: ECityUF["Mato Grosso"], state: "Mato Grosso", uf: "MT" }],
  [ECityUF["Minas Gerais"], { id: ECityUF["Minas Gerais"], state: "Minas Gerais", uf: "MG" }],
  [ECityUF.Para, { id: ECityUF.Para, state: "Para", uf: "PA" }],
  [ECityUF.Parana, { id: ECityUF.Parana, state: "Parana", uf: "PR" }],
  [ECityUF.Pernambuco, { id: ECityUF.Pernambuco, state: "Pernambuco", uf: "PE" }],
  [ECityUF.Piaui, { id: ECityUF.Piaui, state: "Piaui", uf: "PI" }],
  [ECityUF["Rio de Janeiro"], { id: ECityUF["Rio de Janeiro"], state: "Rio de Janeiro", uf: "RJ" }],
  [ECityUF["Rio Grande do Norte"], { id: ECityUF["Rio Grande do Norte"], state: "Rio Grande do Norte", uf: "RN" }],
  [ECityUF["Rio Grande do Sul"], { id: ECityUF["Rio Grande do Sul"], state: "Rio Grande do Sul", uf: "RS" }],
  [ECityUF.Rondonia, { id: ECityUF.Rondonia, state: "Rondonia", uf: "RO" }],
  [ECityUF.Roraima, { id: ECityUF.Roraima, state: "Roraima", uf: "RR" }],
  [ECityUF["Santa Catarina"], { id: ECityUF["Santa Catarina"], state: "Santa Catarina", uf: "SC" }],
  [ECityUF["Sao Paulo"], { id: ECityUF["Sao Paulo"], state: "Sao Paulo", uf: "SP" }],
  [ECityUF.Sergipe, { id: ECityUF.Sergipe, state: "Sergipe", uf: "SE" }],
  [ECityUF.Tocantins, { id: ECityUF.Tocantins, state: "Tocantins", uf: "TO" }],

]);

interface IUFStore {
  findAllUF(): Promise<Uf[]>;
  findStateByUF(uf: string): Promise<Uf>;
}

export { IUFStore, ICityUFStore };
