import NavBar from "./components/NavBar";
import "./components/Styles.css"
import Footer from "./components/Footer";
import Home from "./components/Home";
import MenuCards from "./components/Menu";
import Menu from "./components/Items";

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Home />
        <Menu />
      </main>
      <Footer />
      </div>
  );
}

export default App;
