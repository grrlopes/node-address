import { MAPSprovider } from "../../infra/provider/archive/Mapsprovider";
import { FindMapUseCase } from "../../usecases/findMap/findMapUseCase";
import { findMap } from "./findMap";

const mapProvider = new MAPSprovider();
const findMapUseCase = new FindMapUseCase(mapProvider);
const findmap = new findMap(findMapUseCase);

export { findmap };
