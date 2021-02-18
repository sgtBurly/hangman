import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from "./components/footer";


function App() {
  return (
    <router>
      <div className="App">
        <Navbar />
        <div className="contain">
          <Home />
        </div>
      </div>
      <Footer />
    </router>

  );
}

export default App;
