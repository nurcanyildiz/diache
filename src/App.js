import "./App.css";

function App() {
  // const prayer = [
  //   "Padre nuestro que estás en el cielo,santificado sea tu nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo.Danos hoy nuestro pan de cada día; perdona nuestras ofensas como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén",
  // ];

  // // console.log("el padre nuestro", prayer);

  // function dividePerPhrase(parrgraph) {
  //   // const characters = /([.!?,;])s*(?=[A-Z]|$)/g;
  //   // Just need to add the regex for all special characters
  //   let phrases = parrgraph.map((phrase) => phrase.split(/[;,.]/));

  //   return phrases;
  // }

  // let dividedPrayer = dividePerPhrase(prayer);

  // console.log(dividedPrayer);
  // //at this point dividePerPhrase is an array with 1 array inside

  // function saveFromDevil(dividedPrayer) {
  //   let singularPhrase = dividedPrayer[0];
  //   let reversedPrayer = [];
  //   let result = 0;

  //   for (let i = 0; i < singularPhrase.length; i++) {
  //     reversedPrayer.unshift(singularPhrase[i]);
  //     result++;
  //   }
  //   return reversedPrayer;
  // }
  // let reversed = saveFromDevil(dividedPrayer);

  // console.log(
  //   "El padre nuestro en frases",
  //   dividePerPhrase(prayer),
  //   "padre nuestro al reves",
  //   reversed
  // );

  return (
    <div className="title">
      <header className="App-header">
        <div className="Input">
          <h1>Te llamo p'atrá</h1>
          <form>
            <input type="text" placeholder="Ay Padre"></input>
          </form>
        </div>
        <button>Reverse</button>
        <input type="text"></input>
      </header>
    </div>
  );
}

export default App;
