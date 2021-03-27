interface ICepRespProvider {
  cep?: string
  logradouro?: string
  complemento?: string
  bairro?: string
  localidade?: string
  uf?: string
  ibge?: number
  gia?: number
  ddd?: number
  siafi?: number
  code?: number
  message?: string
}

interface ICepProvider {
  findAddrByCep: (addrce: string) => Promise<ICepRespProvider>
}

export { ICepProvider, ICepRespProvider }
