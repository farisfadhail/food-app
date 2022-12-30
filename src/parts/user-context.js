import { createContext, useState } from 'react';

const userInitialValue = {
  isLoggedIn: false,
  fullName: undefined,
};

// UserContext = contextnya
const UserContext = createContext(userInitialValue);

// UserContextProvider dipake sebagai component, 
// seluruh component didalaman UserContextProvider dapat menggunakan UserContext
// misal <UserContextProvider><App/></UserContextProvider> (seluruh yang ada di App dapat make UserContext)
const UserContextProvider = (props) => {
  const [state, setState] = useState(userInitialValue);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setState({ isLoggedIn: true, fullName: 'admin' });
    }
  };

  const logout = () => {
    setState(userInitialValue);
  };

  // value merupakan nilai yang bakal direturn ketika manggil useContext
  return (
    <UserContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        fullName: state.fullName,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

// contoh cara make di dalam component
// const {isLoggedIn, fullName, login, logout} = useContext(UserContext)
