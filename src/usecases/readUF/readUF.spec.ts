import { readUF } from ".";

describe("### READ UF (readUF) ###", () => {
  it("Should list all States and UF", async () => {
    const states = await readUF.listAllStates();
    expect(states).toBeDefined();
  });

  it("Should retrieve state by UF", async () => {
    const statebyUF = await readUF.listStateByUf("AM");
    expect(statebyUF.state).toStrictEqual("Amazonas");
  });

  it("Should retrieve city by UF", async () => {
    const citybyUF = await readUF.listCityByUf("AM");
    expect(citybyUF).toBeTruthy();
  });

  it("Should evaluate error return", async () => {
    const citybyUF = await readUF.listCityByUf("AM--");
    expect(citybyUF).toStrictEqual({ code: 500, msg: "Internal Server Error" });
  });
});
