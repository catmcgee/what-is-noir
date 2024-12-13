[English](#step-4-a-simple-noirjs-example) | [Español](#nivel-4-un-ejemplo-simple-de-noirjs)

---

# Step 4: A simple NoirJS example

A basic example function of proving and verifying using NoirJS. Find noirJS docs [here](https://noir-lang.org/docs/tutorials/noirjs_app).

## Prerequisites

- node version 20 or higher

## a. Compile the circuit

In `step4/circuits/main` run:

```sh
nargo compile
```

This will create a `target/step4.json` file.

## b. Ensure it is correctly imported into index.js

At the top of `index.js` import the file like this:

```sh
import main from './circuits/main/target/step4.json' assert { type: "json" };
```

## c. npm install

In `step4` run:

```sh
npm install
```

## d. Run the JS

In `step4` run:

```sh
npm run start
```

This will run the `index.js` file. It will run indefinitely so you'll need to `Ctrl C` to stop it.

## Notes

- If you change the circuit, you will need to update the inputs accordingly. 
- The proof and public inputs will be saved in a file called `proof.json`. You can paste these into other verification methods, such as Solidity that is covered in [step5](../step5/README.md).

---

# Nivel 4: Un ejemplo simple de NoirJS

Un ejemplo básico de una función para proving y verifying usando NoirJS. La docs de NoirJS están [aquí](https://noir-lang.org/docs/tutorials/noirjs_app).

## Prerrequisitos

- versión de node 20 o superior

## a. Compilar el circuito

En `step4/circuits/main` ejecuta:

```sh
nargo compile
```

Creará una file `target/step4.json`.

## b. Asegúrate de que esté correctamente importado en index.js

Al inicio de `index.js`, importa la file de la siguiente manera:

```sh
import main from './circuits/main/target/step4.json' assert { type: "json" };
```

## c. Instalar npm

En `step4` ejecuta:

```sh
npm install
```

## d. Ejecutar JS

En `step4` ejecuta:

```sh
npm run start
```

Ejecutará la file `index.js`. Se ejecutará indefinidamente, así que es necesario presionar `Ctrl C` para terminar.

## Notas
- Si cambias el circuito, necesitarás cambiar los inputs.
- El proof y los public inputs se guardarán en una file llamado `proof.json`. Puedes copiar estos datos para otros métodos de verificación, como Solidity, que se cubre en el [nivel 5](../step5/README.md).
