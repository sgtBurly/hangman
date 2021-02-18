import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from "./components/footer";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
            <div className="contain">
              <Home />
            </div>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
