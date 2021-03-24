interface IMapRespProvider {
  candidates?: number;
  status?: string;
}

interface IMapProvider {
  findPlacebyInput: (place: string) => Promise<any>;
}

export { IMapProvider, IMapRespProvider };
