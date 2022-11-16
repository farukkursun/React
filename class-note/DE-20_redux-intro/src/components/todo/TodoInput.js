
import { useDispatch, useSelector } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";


const TodoInput = () => {
 const gorevler1= useSelector((state)=>state.todoReducer.gorevler)
const dispatch1= useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    //!ekle fonksiyonu
    dispatch1(ekle(gorevler1.text))
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={gorevler1.text}
        onChange={(e) =>gorevler1.text=e.target.value}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
