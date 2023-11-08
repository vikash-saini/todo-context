import React from "react";

const initialState = React.createContext({ list: [] });
export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext(null);

export const stateReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, list: [...state.list, action.payload] };
    case "remove":
      const newState = state.filter((item) => item.id != action.payload);
      return { ...state, list: newState };
    default:
      return state;
  }
};
export default ContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const data = React.useContext(StateContext);
  return data;
};

export const useDispatchContext = () => {
  const data = React.useContext(DispatchContext);
  return data;
};
