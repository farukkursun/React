import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./redux/reducers/counterReducer";
import todoReducer from "./redux/reducers/todoReducer";
import {Provider} from 'react-redux'

function App() {
  const toplureducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer,

  })
  
  const store = createStore(toplureducer);

  return (
    <div className="app">
    <Provider  store={store}>
      <Counter />
      <Todo />
      </Provider>
    </div>
  );
}

export default App;
