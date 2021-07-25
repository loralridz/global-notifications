import React, { useContext } from 'react';
import { ADD, REMOVE_ALL, useToastContext } from './context/ToastState';
import { Button } from '@material-ui/core';
import "./App.css";

export default function App() {
  // @ts-ignore
  const { toast, toastDispatch } = useToastContext();
  function showClearAll() {
    if (toast?.length) {
      return (
        <button
          onClick={() =>
            toastDispatch({
              type: REMOVE_ALL
            })
          }
        >
          Clear all notifications
        </button>
      );
    }
  }

  return (
    <div className="app">
      {/* Success Notification */}
      <Button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: 'Account Created!',
              type: 'success'
            }
          })
        }
      >See Success Notification</Button>
      {/* Error Notification */}
      <Button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: 'Invalid Credentials!',
              type: 'error'
            }
          })
        }
      >See Error Notification</Button>
      {/* Success Notification */}
      <Button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: 'Check Again!',
              type: 'warning'
            }
          })
        }
      >See Warning Notification</Button>
      {/* Success Notification */}
      <Button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: 'Account name is ---',
              type: 'info'
            }
          })
        }
      >See Info Notification</Button>
      {/* Clear All Notification */}
      {showClearAll()}
    </div>
  );
}