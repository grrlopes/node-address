import { ViaCEPstore } from '@infraP/archive/ViaCEPprovider'
import { findCep } from './findCep'
import { FindCepUseCase } from './findCepUseCase'

const viacepProvider = new ViaCEPstore()
const findcepUseCase = new FindCepUseCase(viacepProvider)
const findcep = new findCep(findcepUseCase)

export { findcep }
