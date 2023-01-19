import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function useRedirect(redirectPath) {
  const history = useHistory();
  //we call useHistory hook and save returned value in history var
  const location = useLocation();
  //we call useLocation hook and save returned value in location var
  //which contains current location object.

  useEffect(() => {
    if (location.pathname !== redirectPath) {
      history.push(redirectPath);
    }
    return () => {};
  }, [location, redirectPath]);
}
