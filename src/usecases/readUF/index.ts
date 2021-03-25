import { Uf } from "../../entities/Uf"; //"@entities/Uf";
import { BrazilUFstore } from "../../infra/store/archive/BrazilUFstore"; //"@infraS/archive/BrazilUFstore";
import { IBGEprovider } from "../../infra/provider/archive/IBGEprovider"; //"@infraP/archive/IBGEprovider";
import { ReadUFUseCase } from "../../usecases/readUF/readUFUseCase"; //"@usecases/readUF/readUFUseCase";
import { ReadUF } from "../../usecases/readUF/readUF"; //"@usecases/readUF/readUF";

const uf = new Uf();

const brazilUFstore = new BrazilUFstore(uf);
const cityProvider = new IBGEprovider();

const readUFUseCase = new ReadUFUseCase(brazilUFstore, cityProvider);
const readUF = new ReadUF(readUFUseCase);

export { readUF };
