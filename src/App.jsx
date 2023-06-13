// ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ROUTES
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

// SERVICES & UTILS

const App = () => {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PublicRoutes />} />
      </Routes>
      <Routes>
        <Route path="*" element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
