import { IBGEprovider } from "../../infra/provider/archive/IBGEprovider";
import { ReadUFUseCase } from "../../usecases/readUF/readUFUseCase";
import { ReadUF } from "../../usecases/readUF/readUF";

const cityProvider = new IBGEprovider();

const readUFUseCase = new ReadUFUseCase(cityProvider);
const readUF = new ReadUF(readUFUseCase);

export { readUF };
