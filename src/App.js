import {BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route exact path = '/' element={<Login />}> 
          </Route>
          <Route path = "/home" element={<Home />}> 
        </Route>
        </Routes >
       
      </Router>
    </div>
  );
}

export default App;
