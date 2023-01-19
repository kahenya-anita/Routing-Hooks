import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function useRedirect(redirectPath) {
  const history = useHistory();
  //we call useHistory hook and save returned value in history var
  const location = useLocation();
  //we call useLocation hook and save returned value in location var
  //which contains current location object.

  //we use useEffect to run a func everytime the component is mounted or updated
  useEffect(() => {
    if (location.pathname !== redirectPath) {
      history.push(redirectPath);
    } //We check if the current location's pathname is different from the redirectPath passed to the useRedirect function.
    //If the condition is true, we use the history.push method to redirect the user to the redirectPath route. This will add a new entry in the browser's history, and the user will be able to use the browser's back button to return to the previous page.
    return () => {};
  }, [redirectPath, history, location]); //passed these variables
  //as depedencies and not the entire component state as we had done earlier
}
