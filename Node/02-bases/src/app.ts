//!Logger con typescript
// // const { getAge, getUUID, buildLogger } = require('./plugins');
// import { buildLogger } from "./plugins/logger.plugin.ts";
// const logger = buildLogger("app.js");

// logger.log("iniciando la aplicacion");
// logger.error("esto es algo malo");
// logger.warn("esto es una advertencia");
// console.log();

//! Promesas
import { getPokemonById } from "./js-foundation/06-promises";

// getPokemonById(4)
//   .then((name) => {
//     console.log({ name });
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("termino la promesa");
//   });

// let info = getPokemonById(1);
// console.log("info", info);
// setTimeout(() => {
//   console.log(info);
// }, 400);

// console.log(getPokemonById(1));
// info = getPokemonById(1, (name) => {
//   console.log(name.toUpperCase());
// });
// console.log("texto1", info);

// let miPromesa = new Promise((resolver, rejectar) => {
//   let expresion = true;
//   if (expresion) {
//     resolver("Resolvio correcto");
//   } else {
//     rejectar("Se produjo un error");
//   }
// });

// // miPromesa.then((valor) => console.log(valor)),
// //     (error => console.log(error))
// //     ;
// miPromesa
//   .then((valor) => console.log(valor))
//   .catch((error) => console.log(error));

// let promesa = new Promise((resolver) => {
//   console.log("Inicio de la promesa");
//   setTimeout(() => resolver("Saludo con promesa y timeout"), 3000);
//   console.log("Fin de la promesa");
// });

// promesa.then((valor) => console.log(valor));
// async function miFuncionConPromesa() {
//   return "Saludos con promesa y async";
// }
// miFuncionConPromesa().then((valor) => console.log(valor));

// async function funcionConPromesaAwaitTimeout() {
//   console.log("inicio función");
//   let miPromesa = new Promise((resolver) => {
//     setTimeout(() => resolver("promesa con await y timeout"), 3000);
//   });
//   console.log(miPromesa);
//   console.log("fin función");
// }

// funcionConPromesaAwaitTimeout();

//!Factory functions, inyeccion de dependencias
// import { getAge, getUUID } from "./plugins/index.ts";
// import { buildMakePerson } from "./js-foundation/05-factory.ts";

// const makePerson = buildMakePerson({ getUUID, getAge });
// const person = makePerson({ name: "Claudio", birthdate: "1988-03-21" });
// console.log(person);

//!callbacks

import { getUserById } from "./js-foundation/03-callbacks";
interface User {
  id: number;
  name: string;
}
const userIdToFind = 1;
getUserById(userIdToFind, (error?: string, user?: User) => {
  if (user) {
    console.log(`Usuario encontrado: ${user.name}`);
  } else {
    console.log(`nada`);
    // si necesitamos, podemos lanzar: throw new Error(error);
  }
});

// //! Destructuring

// import {
//   APPDATA,
//   SESSIONNAME,
//   TEMP,
// } from "./js-foundation/02-destructuring.ts";
// const {
//   APPDATA,
//   SESSIONNAME,
//   TEMP,
// } = require("./js-foundation/02-destructuring.ts");
// console.log({ APPDATA, SESSIONNAME, TEMP });

// const {
//   APPDATA,
//   SESSIONNAME,
//   TEMP,
// } = require("./js-foundation/02-destructuring.ts");
// console.log({ APPDATA, SESSIONNAME, TEMP });

//!Template
// import { emailTemlpate } from "./js-foundation/01-template.ts";

// console.log(emailTemlpate);
