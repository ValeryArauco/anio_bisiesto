function bisiesto(anio) {
  if (anio % 400 == 0){
    return "Es un año bisiesto";
  }
  return "No es un año bisiesto";
}

export default bisiesto;
