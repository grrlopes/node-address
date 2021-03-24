import { Uf } from "@entities/Uf";
import { BrazilUFstore } from "@infraS/archive/BrazilUFstore";
import { IBGEprovider } from "@infraP/archive/IBGEprovider";
import { ReadUFUseCase } from "@usecases/readUF/readUFUseCase";
import { ReadUF } from "@usecases/readUF/readUF";

const uf = new Uf();

const brazilUFstore = new BrazilUFstore(uf);
const cityProvider = new IBGEprovider();

const readUFUseCase = new ReadUFUseCase(brazilUFstore, cityProvider);
const readUF = new ReadUF(readUFUseCase);

export { readUF };
