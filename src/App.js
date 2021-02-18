import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
