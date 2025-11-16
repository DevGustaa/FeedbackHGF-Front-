import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/Start";
import Pesquisa from "./pages/Pesquisa/Pesquisa";
import Thanks from "./pages/Thanks/Thanks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/agradecimento" element={<Thanks />} />
    </Routes>
  );
}

export default App;
