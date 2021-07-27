import { Color } from "@material-ui/lab/Alert";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { useSnackbar } from "notistack";

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

  const recentToast: ToastInterface = toast[toast.length - 1];
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (recentToast)
      enqueueSnackbar(recentToast.content, { variant: recentToast.type });
  }, [enqueueSnackbar, recentToast]);

  return (
    <ToastContext.Provider value={toastData}>
      {props.children}
      {/* {createPortal(<Toast toast={toast} />, document.body)} */}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
