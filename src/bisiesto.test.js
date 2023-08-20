import bisiesto from "./bisiesto";

describe("Anio Bisiesto", () => {
  it("Devuelve que es un año bisiesto si es divisible entre 400", () => {
    expect(bisiesto(2000)).toEqual("Es un año bisiesto");
  });
});
