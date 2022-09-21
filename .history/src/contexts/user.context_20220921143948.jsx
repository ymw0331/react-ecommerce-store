import { createContext, useState, useEffect } from "react";
import {
    createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
// a glorified component that leverage the useState, we expose it value and setValue externally

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // the moment that the user provider mounted
  //   signOutUser();

  useEffect(() => {
    // open listener, listening to changes
    // if user sign out, we store null, else we store the object
    const unsubsribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if(user){
        createUserDocumentFromAuth
      }
      setCurrentUser(user);
    });

    return unsubsribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};