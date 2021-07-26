import { Paper } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        maxWidth: 960,
        minHeight: '100vh',
        margin: '0 auto'
    },
});


const AppContainer = (props) => {
    const classes = useStyles();
    return (
        <Paper elevation={4} className={classes.root}>
            {props.children}
        </Paper>
    )
};

export default AppContainer;
