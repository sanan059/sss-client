import jwtDecode from "jwt-decode";

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwtDecode(token);
    if(decoded.exp * 1000 > Date.now()){
      return true;
    } else return false;
  }

  if(!token) return false;
}

// Decode Token and Return User Details
export const decodedToken = () => {
  const decoded = jwtDecode(localStorage.getItem("token"));  
  return decoded;
}