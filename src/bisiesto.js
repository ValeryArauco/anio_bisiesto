function bisiesto(anio) {
  if (anio % 400 == 0){
    return "Es un año bisiesto";
  }
  if (anio % 100 == 0){
    return "No es un año bisiesto"
  }
  if (anio % 4 == 0){
    return "Es un año bisiesto";
  }
  return anio;
}

export default bisiesto;
