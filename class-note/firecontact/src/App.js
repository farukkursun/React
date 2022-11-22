import NewTable from "./components/table/NewTable";
import "bootstrap/dist/css/bootstrap.min.css";
import NevForm from "./components/form/NevForm";
import './App.css'

function App() {
  return (
    <div className="container">
      <NevForm />
      <NewTable />
    </div>
  );
}

export default App;
