import LifeCycleMethods from "./components/LifeCycleMethods";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Clock from "./components/Clock";

import React, { useState } from "react";
import OrnekUseEffect from "./components/OrnekUseEffect";

function App() {
  const [goster, setGoster] = useState(true);
  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods /> */}

      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>
        GOSTER
      </button>

      {goster ? <Clock /> : ""}
      {/* {goster && <Clock />} altarnatif uygulama */}

      {goster && <OrnekUseEffect />}
    </div>
  );
}

export default App;
