import React, { useContext, useState } from "react";

const userContext = React.createContext();
export const useUseContext = () => useContext(userContext);

const UserProvider = ({ children }) => {
  const [upuser, setUpuser] = useState({});

  function ProviderUser(dato) {
    setUpuser(() => dato);
  }


console.log(upuser);

  return (
    <>
      <userContext.Provider
        value={{
          ProviderUser,
          upuser,
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};

export default UserProvider;
