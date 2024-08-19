function generatePassword(length) {
  if (length < 8) {
    console.log("El largo mínimo de la contraseña es de 8 caracteres");
    return;
  }

  const mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnñopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
  const todosLosCaracteres = mayusculas + minusculas + numeros + simbolos;
  let contraseña = '';

  contraseña += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  contraseña += minusculas[Math.floor(Math.random() * minusculas.length)];
  contraseña += numeros[Math.floor(Math.random() * numeros.length)];
  contraseña += simbolos[Math.floor(Math.random() * simbolos.length)];

  for (let i = contraseña.length; i < length; i++) {
    contraseña += todosLosCaracteres[Math.floor(Math.random() * todosLosCaracteres.length)];
  }

  console.log(contraseña);
}

generatePassword(8);
generatePassword(8);