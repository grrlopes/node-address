import { findcep } from "@usecases/findCep";

export { readUF } from "@usecases/readUF";

findcep.searchAddrByCep("01001-000-").then((value) => {
  console.log(value);
});
