export const TodoItem = (props) => {
 
  return (
    <>
      {props.todo.map((item)=>(
        <div key={item.sno}>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
  )
}
