import { updateCurrentUser } from "firebase/auth";
import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

const {[currentUser, setCurrentUser] = useState(null)
const value = {currentUser, setCurrentUser}

  return <UserContext.Provider value={}></UserContext.Provider>{children}</UserContext.Provider>;
};

