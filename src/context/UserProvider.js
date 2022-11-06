import React, { useContext, useState } from "react";

const userContext = React.createContext();
export const useUseContext = () => useContext(userContext);

const UserProvider = ({ children }) => {
  const [upuser, setUpuser] = useState({});

  function ProviderUser(dato) {
    setUpuser(() => dato);
  }

const valorUser= upuser
console.log(valorUser);

  return (
    <>
      <userContext.Provider
        value={{
          ProviderUser,
          valorUser,
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};

export default UserProvider;
