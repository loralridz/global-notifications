import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import SnackToast from "./Notification";
import { useToastContext, REMOVE, ToastInterface } from "../context/ToastState";

// @ts-ignore
export default function Toast({ toast }) {
    const { toastDispatch } = useToastContext();
    const useStyles = makeStyles((theme: Theme) => ({
        toast: {
            position: "fixed",
            top: "50px",
            right: "10px",
            width: "300px",
            maxHeight: "90vh",
            // overflow: scroll,
        },
        toastContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        }
    }));
    const classes = useStyles();
    // TODO : count instances of toast rendered and limit 
    // let instancesCount = 0
    // useEffect(() => {
    //     instancesCount += 1
    //     console.log({instancesCount})
    //     return () => {
    //       instancesCount -= 1
    //       console.log({instancesCount})
    //     }
    //   }, [])
    return (
        <div className={classes.toast}>
            <div className={classes.toastContainer}>
                {toast.map((t: ToastInterface) => {
                    return (
                        <SnackToast id={t.id} content={t.content} type={t.type} />
                    );
                })}
            </div>
        </div>
    );
}
