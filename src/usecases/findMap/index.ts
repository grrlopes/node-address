import { MAPSprovider } from "@infraP/archive/Mapsprovider";
import { FindMapUseCase } from "./findMapUseCase";
import { findMap } from "./findMap";

const mapProvider = new MAPSprovider();
const findMapUseCase = new FindMapUseCase(mapProvider);
const findmap = new findMap(findMapUseCase);

export { findmap };
