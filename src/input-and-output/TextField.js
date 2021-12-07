import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#c4c4c4',
                    borderWidth: '1px',
                },
                '&:hover fieldset': {
                    borderColor: '#333333',
                    borderWidth: '2px',
                    transition: 'none',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#333333',
                    borderWidth: '2px',
                },
                "& $input": {
                    padding: "0 0 0 15px",
                },
            },
            '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
                padding: "5px"
            },
            borderRadius: '4px',
            boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.05)',
            fontFamily: "DMSans-Regular",
            height: '42px',
            marginTop: '0',
        },
        input: {
            "&::placeholder": {
                color: '#8DB0E3',
                opacity: '1',
            },
            "&&& $input": {
                padding: "5px"
            },
            color: '#333333',
            fontSize: 'clamp(14px, .875rem, 20px)',
        },
    }))
;


export function PokemonTextField(props) {
    const classes = useStyles();
    const ourInputProps = {
        classes: {
            root: classes.root,
            input: classes.input,
        },
    };
    const ourinputProps = {
        autoComplete:"chrome-off"
    };
    const newInputProps = {...props.InputProps, ...ourInputProps};
    const newinputProps = {...props.inputProps, ...ourinputProps};
    return (
        <TextField
            variant="outlined"
            className={classes.root}
            InputLabelProps={{className: classes.textfield_label}}
            style={{
                backgroundColor: '#ffffff',
                width: '100%',
                height: 'clamp(38px, 2.1863vmin, 44px)',
            }}
            {...props}
            InputProps={newInputProps}
            inputProps={newinputProps}
        />
    );
};