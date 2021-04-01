interface ICityIBGERespProvider {
  id?: number;
  nome?: string;
  code?: number;
  msg?: string;
}

interface IUfRegioAUX {
  id: number,
  sigla: string,
  nome: string,
}

interface IUfIBGERespProvider {
  id?: number;
  sigla?: string;
  nome?: string;
  regiao?: IUfRegioAUX
  code?: number;
  msg?: string;
}

interface ICityIBGEProvider {
  findCityByUF: (addrce: string) => Promise<ICityIBGERespProvider>;
  findAllUF: () => Promise<IUfIBGERespProvider>
}

export { ICityIBGEProvider, ICityIBGERespProvider, IUfIBGERespProvider };
