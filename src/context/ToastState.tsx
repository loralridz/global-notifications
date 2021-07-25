import { Color } from "@material-ui/lab/Alert";
import React, { createContext, useReducer, useContext } from "react";
import { createPortal } from "react-dom";
import Toast from "../components/Toast";

export interface ToastInterface {
  id: any,
  content: string,
  type: Color | undefined
}

const initialState: any = [];

export const ToastContext = createContext(initialState);

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const REMOVE_ALL = "REMOVE_ALL";

export const toastReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          content: action.payload.content,
          type: action.payload.type
        }
      ];
    case REMOVE:
      return state.filter((t: { id: any; }) => t.id !== action.payload.id);
    case REMOVE_ALL:
      return initialState;
    default:
      return state;
  }
};

export const ToastProvider = (props: any) => {
  const [toast, toastDispatch] = useReducer(toastReducer, initialState);
  const toastData = { toast, toastDispatch };
  return (
    // @ts-ignore
    <ToastContext.Provider value={toastData}>
      {props.children}
      {createPortal(<Toast toast={toast} />, document.body)}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
