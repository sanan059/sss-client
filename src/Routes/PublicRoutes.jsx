// ROUTER DOM
import { Routes, Route } from "react-router-dom";

// PAGES
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/SignUp";

// UTILITIES

const PublicRoutes = () => {
  // ROUTES
  const publicRoutes = [
    {
      path: '/sign-in',
      Component: SignIn
    },
    {
      path: '/sign-up',
      Component: SignUp
    },
    {
      path: '/',
      Component: Home
    }
  ];

  return <>
    <Routes>
      {publicRoutes.map(({ path, Component }, i) => {
        return <Route path={path} element={<Component />} key={i} />
      })}
    </Routes>
  </>
}

export default PublicRoutes;