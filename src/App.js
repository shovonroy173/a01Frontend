import Home from './component/Home';
// import Submit from './component/Submit';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
