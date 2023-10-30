import './App.css';
import Select from './components/Selector';
import Hover from './components/Hover';
import ButtonContext from './ButtonContext';
function App(){
  return (
    <div className="App">
      <ButtonContext>
        <Select />
        <Hover />
      </ButtonContext>
      
    </div>
  )
}
export default App;