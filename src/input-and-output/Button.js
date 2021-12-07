import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const PrimaryButton = withStyles((theme) => ({
    root: {
        fontFamily: "DMSans-Bold",
        fontSize: 'clamp(14px, .875rem, 20px)',
        backgroundColor: "#757575",
        borderRadius: "23px",
        border: "4px solid #757575",
        boxSizing: "border-box",
        padding: "4px 0px",
        width: "180px",
        "&:hover" :{
            backgroundColor: "#333333",
            border: "4px solid #333333",
        },
    },
    text: {
        color: "#FFFFFF",
    },
    label:{
        textTransform:"capitalize",
    }
}))(Button);

const SecondaryButton = withStyles((theme) => ({
    root: {
        fontFamily: "DMSans-Bold",
        fontSize: 'clamp(14px, .875rem, 20px)',
        backgroundColor: "transparent",
        borderRadius: "23px",
        border: "4px solid #757575",
        boxSizing: "border-box",
        padding: "4px 0px",
        width: "180px",
        color: "#757575",
        "&:hover" :{
            backgroundColor: "#FFFFFF",
            color: "#333333",
            border: "4px solid #333333",
        },
    },
    label:{
        textTransform:"capitalize",
    }
}))(Button);

const SearchButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#757575",
        borderRadius: '4px',
        padding: "4px 0px",
        width: "100%",
        height: "100%",
        minWidth: "0",
        "&:hover" :{
            backgroundColor: "#333333",
        },
    },
}))(Button);

export {PrimaryButton, SecondaryButton, SearchButton}