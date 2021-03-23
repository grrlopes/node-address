interface ICityIBGERespProvider {
  id?: number;
  nome?: string;
  code?: number;
  msg?: string;
}

interface ICityIBGEProvider {
  findCityByUF: (addrce: string) => Promise<ICityIBGERespProvider>;
}

export { ICityIBGEProvider, ICityIBGERespProvider };
