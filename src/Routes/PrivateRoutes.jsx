// ROUTER DOM
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard"; 

// UTILITIES

const PrivateRoutes = () => {
  // ROUTES
  const privateRoutes = [
    {
      path: '/dashboard',
      Component: Dashboard
    }
  ];

  return <Routes>
      {privateRoutes.map(({ path, Component }, i) => {
        return <Route path={path} element={<Component/>} key={i} />
      })}
    </Routes>
}

export default PrivateRoutes;