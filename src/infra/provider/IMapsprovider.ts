interface IMapRespProvider {
  candidates?: number;
  status?: string;
}

interface IMapProvider {
  findLocation: (place: string) => Promise<any>;
}

export { IMapProvider, IMapRespProvider };
