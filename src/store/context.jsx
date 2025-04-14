import React from "react";

const StoreContext = React.createContext(null);

const storeReducer = (data, action) => {
  switch (action.type) {
    case "create": {
      data.session = action.payload;
      return data;
    }
  }
};

const StoreProvider = () => {
  const [state, dispatch] = React.useReducer(storeReducer, {});
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return React.useContext(StoreContext);
};

export default StoreProvider;
