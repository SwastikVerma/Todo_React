import { TodoItem } from "./todoItem"

export const Todos=(props) =>{
    return(
      <div className="container">
        <h3>Todos List</h3>
        <TodoItem todo={props.todos}/>
      </div>
    )
}
