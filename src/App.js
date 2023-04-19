import { BrowserRouter, Routes, Route } from "react-router-dom";
import UINotFound from "src/pages/404";
import UIMenu from "src/pages/UIMenu";
import "./assets/scss/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UINotFound />} />
        <Route path="/*" element={<UIMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
