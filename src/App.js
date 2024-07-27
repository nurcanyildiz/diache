import "./App.css";
import reverseAlgorithm from "./reverseAlgorithm";
import { useState } from "react";
import { useContext } from "react";

function App({ initialText }) {
  const [text, setText] = useState("");
  const [reversed, setReversed] = "";

  return (
    <div className="title">
      <header className="App-header">
        <div className="container">
          <h1>Te llamo p'atrá</h1>
        </div>
        <div className="content">
          <div className="input">
            <form>
              <input
                type="text"
                placeholder="Ay Padre"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </form>
          </div>
          <button>Reverse</button>
          <input type="text"></input>
        </div>
        <div>
          <reverseAlgorithm />
        </div>
      </header>
    </div>
  );
}

export default App;
