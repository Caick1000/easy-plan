import React from 'react';
import { TextField, IconButton, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './style';


const Form = (props) => {
    const { classes, onClick } = props
    return (
        <div className={styles.formWrapper}>
            <form onSubmit={props.onSubmit}>
                <TextField
                  onChange={props.handleChange}
                  placeholder='teste'
                  InputProps={{ classes: {input: classes.input} }}/>
                <IconButton variant='contained' label='submit' type='submit' color='primary' onClick={onClick}>
                    <NavigateNextIcon style={{ color: 'white' }} />
                </IconButton>
            </form>
        </div>
    )
};

export default withStyles(styles)(Form);