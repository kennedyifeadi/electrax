import Navbar from "./components/layout/NavBar";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Footer/>
    </div>
  );
}

export default App;
