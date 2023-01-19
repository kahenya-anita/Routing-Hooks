import { useRouteMatch } from "react-router-dom";

export default function Mycomponent() {
  let match = useRouteMatch("about/:id");
  //call useRouteMatch and pass the route path
  return <p>Matched: {match !== null ? "yes" : "no"}</p>;
  //checking if the current route matches the passed path and
  //return 'yes' if it does and 'no' if it does not.
}
