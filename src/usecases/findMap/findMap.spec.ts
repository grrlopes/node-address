import { findmap } from ".";

describe("### FIND Map (findMap) ###", () => {
  it("Should retrieve geolocation data by place's name", async () => {
    const place = await findmap.searchPlacebyInput({ place: "FDTE" });
    expect(place).toStrictEqual({
      candidates: [
        {
          formatted_address:
            "Av. Afrânio Peixoto, 412 - Butantã, São Paulo - SP, 05507-000, Brasil",
          geometry: {
            location: {
              lat: -23.567271,
              lng: -46.7089687
            },
            viewport: {
              northeast: {
                lat: -23.56585652010728,
                lng: -46.70758072010728
              },
              southwest: {
                lat: -23.56855617989272,
                lng: -46.71028037989272
              }
            }
          },
          name:
            "FDTE - Fundação para o Desenvolvimento Tecnológico da Engenharia"
        }
      ],
      status: "OK"
    });
  });

  it("Should be valided when return empty", async () => {
    const place = await findmap.searchPlacebyInput({ place: "" });
    expect(place).toBeTruthy();
  });
});
