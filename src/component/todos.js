

// export const Todos = () => {
//   return (
//     <>
//     <div>
//         todos works!!!
//     </div>
//     </>
//   )
// }

import { TodoItem } from "./todoItem"

export const Todos=(props) =>{
    return(
      <div className="container">
        <h3>Todos List</h3>
        <TodoItem todo={props.todos}/>
      </div>
    )
}


// {/* {props.todos.map((todo) => (
//         <div key={todo.sno}>
//           <h4>{todo.title}</h4>
//           <p>{todo.desc}</p>
//         </div>
//       ))} */}