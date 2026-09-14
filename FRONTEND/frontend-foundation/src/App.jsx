import Counter from "./components/Counter";  
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"; 
import ItemList from "./components/ItemList";
import "./App.css"; 
 
function App() { 
  return ( 
    <div> 
      <Navbar /> 
      <Hero /> 
      <ItemList /> 
      <Counter /> 
    </div> 
  ); 
} 
 
export default App; 