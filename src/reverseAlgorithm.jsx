import React from "react";

const reverseAlgorithm = () => {
  const prayer = [
    "Padre nuestro que estás en el cielo,santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo.Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén",
  ];

  // console.log("el padre nuestro", prayer);

  function dividePerPhrase(parragraph) {
    // const characters = /([.!?,;])s*(?=[A-Z]|$)/g;
    // Just need to add the regex for all special characters
    let phrases = parragraph.map((phrase) => phrase.split(/[;,.]/));

    return phrases;
  }

  let dividedPrayer = dividePerPhrase(prayer);

  console.log(dividedPrayer);
  //at this point dividePerPhrase is an array with 1 array inside

  function saveFromDevil(dividedPrayer) {
    let singularPhrase = dividedPrayer[0];
    let reversedPrayer = [];
    let result = 0;

    for (let i = 0; i < singularPhrase.length; i++) {
      reversedPrayer.unshift(singularPhrase[i]);
      result++;
    }
    return reversedPrayer;
  }
  let reversed = saveFromDevil(dividedPrayer);

  //   console.log(
  //     "El padre nuestro en frases",
  //     dividePerPhrase(prayer),
  //     "padre nuestro al reves",
  //     reversed
  //   );

  return (
    <div>
      <p>hola</p>
      <p>`{reversed}`</p>
    </div>
  );
};

export default reverseAlgorithm;
