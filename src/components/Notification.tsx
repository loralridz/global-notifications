import React, { Key, useEffect } from 'react';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';
import { REMOVE, useToastContext } from '../context/ToastState';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

interface Props {
    // id?: Key | null,
    id: any,
    content: string,
    type: Color | undefined
}

export default function SnackToast(props: Props) {
    const classes = useStyles();
    const { toastDispatch } = useToastContext();
    const { id, content, type } = props;

  
    return (
        <div className={classes.root}>

            {/* <Snackbar open={open} autoHideDuration={3000} 
            // onClose={handleClose}
            > */}
            <Alert onClose={() => toastDispatch({
                type: REMOVE,
                payload: {
                    id: id
                }
            })
            } severity={type}>{content}</Alert>
            {/* </Snackbar> */}
        </div>
    );
}