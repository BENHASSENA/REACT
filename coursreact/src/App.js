import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const real = true;
  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3 style = {{color:"red"}}>Hello 2+2 {real ? "Yes": "No"}!</h3>
      <Header />
      <Header title="NONE"/>
     


    </div>
    
  );
}

export default App;
