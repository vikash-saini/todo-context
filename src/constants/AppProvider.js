import React from "react";
import { v4 as uuidv4 } from "uuid";

// initial state
const initialState = { list: [] };
export const WalkThroughContext = React.createContext(initialState);
export const WalkThroughDispatch = React.createContext(null);

export const walkThroughReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const id = uuidv4();
      const data = {
        id: id,
        task: action.payload,
      };
      return { ...state, list: [...state.list, data] };
    case "delete":
      const newlist = state.list.filter((item) => item.id !== action.payload);
      return { ...state, list: newlist };
    default:
      return state;
  }
};

const AppProvider = (props) => {
  const [state, dispatch] = React.useReducer(walkThroughReducer, initialState);
  return (
    <WalkThroughContext.Provider value={state}>
      <WalkThroughDispatch.Provider value={dispatch}>
        {props.children}
      </WalkThroughDispatch.Provider>
    </WalkThroughContext.Provider>
  );
};

export const useWalkThroughState = () => {
  const data = React.useContext(WalkThroughContext);
  return data;
};
export const useWalkThroughDispatch = () => {
  const dispatch = React.useContext(WalkThroughDispatch);
  return dispatch;
};
export default AppProvider;
