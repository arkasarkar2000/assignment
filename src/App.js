import './App.css';
import Multiselect from './components/Multiselect';
//import Compo from './components/Compo';


function App() {

  const values = ['Option 1 ','Option 2', 'Option 3'] //Enter your options
  return (
    <div className="App">
    {/* <Compo value={values} readonly={false}/> */}
      <Multiselect valuess={values} readonly={false}/>
    </div>
  );
}

export default App;
