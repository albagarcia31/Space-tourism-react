import { BrowserRouter, Route, Routes } from "react-router-dom";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout/Layout";
import MainContextProvider from "./context/MainContext";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/crew" element={<Crew />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
