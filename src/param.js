import { useParams } from "react-router-dom";

export default function Mycomponent() {
  let params = useParams();
  //call useParams hook and save returned value in variable 'params'
  return <p>Value of id: {params.id}</p>;
  //render value of the id parameter
}
