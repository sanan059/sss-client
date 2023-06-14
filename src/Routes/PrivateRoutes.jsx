// HOOKS
import { useEffect } from "react";
// ROUTER DOM
import { Routes, Route } from "react-router-dom";
// APP COMPONENT
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserServices from "../Components/UserServices/UserServices";
import UserNavbar from "../Components/UserNavbar/UserNavbar";
// UTILITIES
import { isLoggedIn } from "../Utilities/AuthUtils/AuthUtils";

const PrivateRoutes = () => {
  // ROUTES
  const privateRoutes = [
    {
      path: '/dashboard',
      Component: Dashboard
    },
    {
      path: '/dashboard/services',
      Component: UserServices
    }
  ];

  useEffect(() => {

  }, [isLoggedIn()])
  

  return <>
  {console.log(isLoggedIn())}
  {isLoggedIn() ? <UserNavbar /> : null}
    <Routes>
      {privateRoutes.map(({ path, Component }, i) => {
        return <Route path={path} element={<Component />} key={i} />
      })}
    </Routes>
  </>
}

export default PrivateRoutes;