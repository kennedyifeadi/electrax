import Navbar from "./components/layout/NavBar";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import { Footer } from "./components/layout/Footer";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-max flex flex-col relative">
        <Navbar />
        <AnimatedRoutes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
