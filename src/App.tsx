import { Route, Routes } from "react-router-dom";
import { Carousel, Footer, Header } from "./components";
import Home from "./views/Home";
import Documents from "./views/Documents";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/docs" element={<Documents />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
