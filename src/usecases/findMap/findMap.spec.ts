import { findmap } from ".";

describe("### FIND Map (findMap) ###", () => {
  it("Should retrieve geolocation data by place's name", async () => {
    const place = await findmap.searchLocation({
      place: "R. Bruno Simoni, 374 - Pinheiros",
    });
    expect(place).toStrictEqual({
      results: [
        {
          address_components: [
            {
              long_name: "374",
              short_name: "374",
              types: ["street_number"],
            },
            {
              long_name: "Rua Bruno Simoni",
              short_name: "R. Bruno Simoni",
              types: ["route"],
            },
            {
              long_name: "Pinheiros",
              short_name: "Pinheiros",
              types: ["political", "sublocality", "sublocality_level_1"],
            },
            {
              long_name: "São Paulo",
              short_name: "São Paulo",
              types: ["administrative_area_level_2", "political"],
            },
            {
              long_name: "São Paulo",
              short_name: "SP",
              types: ["administrative_area_level_1", "political"],
            },
            {
              long_name: "Brasil",
              short_name: "BR",
              types: ["country", "political"],
            },
            {
              long_name: "05424-030",
              short_name: "05424-030",
              types: ["postal_code"],
            },
          ],
          formatted_address:
            "R. Bruno Simoni, 374 - Pinheiros, São Paulo - SP, 05424-030, Brasil",
          geometry: {
            location: {
              lat: -23.5704685,
              lng: -46.6983749,
            },
            location_type: "ROOFTOP",
            viewport: {
              northeast: {
                lat: -23.5691195197085,
                lng: -46.6970259197085,
              },
              southwest: {
                lat: -23.5718174802915,
                lng: -46.69972388029149,
              },
            },
          },
          place_id: "ChIJ8e1tHwhXzpQRHEYJfpgVpLA",
          plus_code: {
            compound_code: "C8H2+RM Pinheiros, São Paulo - SP, Brasil",
            global_code: "588MC8H2+RM",
          },
          types: ["street_address"],
        },
      ],
      status: "OK",
    });
  });

  it("Should be valided when return empty", async () => {
    const place = await findmap.searchLocation({ place: "" });
    expect(place).toBeTruthy();
  });
});
