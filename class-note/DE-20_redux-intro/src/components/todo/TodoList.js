import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from 'react-redux'
import { temizle } from "../../redux/actions/todoActions";

const TodoList = () => {
 const gorevler1=useSelector((state1)=>state1.todoReducer.gorevler)
 const dispatch= useDispatch()
  return (
    <div>
      <div>
     {gorevler1.map((gorev)=>(
      <TodoItem gorev= {gorev} />
     )
    
     )}
         
      
      </div>
      <div className="clear-wrapper">
        <button className="clear-button"
        onClick={()=> dispatch(temizle())}
        >Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
