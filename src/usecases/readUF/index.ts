import { Uf } from "@entities/Uf";
import { BrazilUFstore } from "@infraS/archive/BrazilUFstore";
import { ReadUFUseCase } from "@usecases/readUF/readUFUseCase";
import { ReadUF } from "@usecases/readUF/readUF";

const uf = new Uf()
const brazilUFstore = new BrazilUFstore(uf);
const readUFUseCase = new ReadUFUseCase(brazilUFstore);
const readUF = new ReadUF(readUFUseCase);

export { readUF };
