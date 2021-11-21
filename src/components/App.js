import React,{useState} from "react";
import "./../styles/App.css";
import Title from'./Title';
import { v4 as uuid } from "uuid";

 function App() 
 {
	const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    

    const handleChange = ({target}) => {
        setTodo(target.value);
    }
    const addToDo =()=>{
        let item ={
            id:uuid(),
            title:todo
        }

    
     setTodoList([...todoList,item])
     setTodo("");
    }


    const handleDelete = (id) => {
        const updatedList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedList);
      };
 	return (
 	<div id="main">
         <Title/>
         <div>
      <input id="task" onChange={handleChange} value={todo} placeholder="Enter your List"/>
            <button id="btn" onClick={addToDo}>Add Task </button>
            </div>
            <div id="todo">

            {todoList.map((myToDo) => (
                <div id="box">
                    
                <div className="list">{myToDo.title}</div>
                <div onClick={()=>handleDelete(myToDo.id)}id="del">
                <img width="25px"height="25px"src="https://cdn-icons.flaticon.com/png/512/3368/premium/3368864.png?token=exp=1637493709~hmac=1782aa00e05973129d4f37519f838b87"/>
               </div>
                </div>

              
            ))}
            </div>

 	</div>
 	);
 }
export default App;