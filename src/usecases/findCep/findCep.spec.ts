import { findcep } from ".";

describe("### FIND CEP (findCep) ###", () => {
  it("Should retrieve address by CEP", async () => {
    const address = await findcep.searchAddrByCep("01001-000");
    expect(address).toMatchObject({
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    });
  });

  test("Should validate erro code when cep is passed wrong", async () => {
    const address = await findcep.searchAddrByCep("01001-001-");
    expect(address).toEqual({
      code: 400,
      message: "Bad Request",
    });
  });
});
