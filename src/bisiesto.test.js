import bisiesto from "./bisiesto";

describe("Anio Bisiesto", () => {
  it("Devuelve que un año es bisiesto si es divisible entre 400", () => {
    expect(bisiesto(2000)).toEqual("Es un año bisiesto");
  });

  it("Devuelve que un año no es bisiesto si es divisible entre 100 pero no es divisible entre 400", () => {
    expect(bisiesto(1700)).toEqual("No es un año bisiesto");
  });

  it("Devuelve que un año es bisiesto si es divisible entre 4 pero no es divisible entre 100", () => {
    expect(bisiesto(2008)).toEqual("Es un año bisiesto");
  });
  
  it("Devuelve que un año no es bisiesto si no es divisible entre 4", () => {
    expect(bisiesto(2018)).toEqual("No es un año bisiesto");
  });
});
