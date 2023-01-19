import { useHistory } from "react-router-dom";

export default function Mycomponent() {
  let history = useHistory(); //call useHistory hook and save the returned
  //value in variable 'history'

  function handleClick() {
    history.push("/about");
  } //call push method on history, which will navigate to the about route
  return <button onClick={handleClick}>Go to About Page</button>;
  //when button is called it will call handleclick func
}
