import './App.css';
import Header from './component/header';
import { Footer } from './component/footer';
import { TodoItem} from './component/todoItem';
import { Todos } from './component/todos';

function App() {
  let todos=[
    {
      sno: 1,
      title: "Go to the market",
      desc: "Get the work done"
    },
    {
      sno:2,
      title: "see memes",
      desc: "Get more darker than South Indians"
    },
  ]
  return (
    <>
    
    <Header title="HOLA" SearchBar={true}/>
    <Todos todos={todos}/>
    <Footer />
    <Footer />
    <Footer />
    
    </>
    
    
  );
}

export default App;
