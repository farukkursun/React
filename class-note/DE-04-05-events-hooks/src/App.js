import Events from "./1-events-hooksintro/Events";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import Counter from "./2-classComponents/Counter";


function App() {
  return (
    <div>
     <Events/>
     <Hooks/>
     <Counter/>
     <Counter count={10}/>
    </div>
  );
}

export default App;
