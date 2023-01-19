import { useLocation } from "react-router-dom";

export default function Mycomponent() {
  let location = useLocation();

  return <p>Current pathname: {location.pathname}</p>;
  //render the current pathname of the location object
}
