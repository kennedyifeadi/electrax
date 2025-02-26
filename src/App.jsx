// import { Router as BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./components/layout/NavBar";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold
import LineCard from "./components/ui/LineCard";

function App() {
  return (
    <div>
      <Navbar />
      <LineCard
        color={true}
        heading="Advanced Aerodynamics"
        body="Experience superior efficiency and performance with precision-engineered
         aerodynamics designed to reduce drag and enhance speed."
      />
    </div>
  );
}

export default App;
