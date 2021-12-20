import React, { createContext, useState } from "react";

export const UserContext = createContext({});

// This context provider is passed to any component requiring the context
export const UserProvider:React.FC = ({ children }) => {
  // all data we want to share
    // for test
  const [sendfile,setsendfile]=useState(null)
  const [StringFile,setStringFile]=useState(null)

  
  return (
    <UserContext.Provider
      value={{
            sendfile,
            setsendfile,
            StringFile,
            setStringFile
        }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider