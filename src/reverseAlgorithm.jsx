import React from "react";

const ReverseAlgorithm = ({ text }, e) => {
  // e.preventDefault();
  const prayer = [
    "Padre nuestro que estás en el cielo,santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo.Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén",
  ];

  //this function divides any text that is in an array into an array of phrases
  function dividePerPhrase(parragraph) {
    // const characters = /([.!?,;])s*(?=[A-Z]|$)/g;
    // Just need to add the regex for all special characters
    let phrases = parragraph.map((phrase) => phrase.split(/[;,.]/));

    return phrases;
  }

  let dividedText = dividePerPhrase(prayer);

  // console.log(dividedPrayer);
  //at this point dividedText is an array with 1 array inside

  function rerverseText(array) {
    let singularPhrase = array[0];
    let reversedText = [];

    for (let i = 0; i < singularPhrase.length; i++) {
      reversedText.unshift(singularPhrase[i]);
    }
    return reversedText;
  }

  let reversed = rerverseText(dividedText).toString();

  console.log(reversed);

  return (
    <div>
      <p>hola</p>
      <div>{reversed}</div>
    </div>
  );
};

export default ReverseAlgorithm;
