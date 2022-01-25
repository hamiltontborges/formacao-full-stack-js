import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'; 

import Header from "../../partials/Header/Header"

const useStyles = makeStyles(() => ({
    content: {
        padding: '15px 0',
    }
}))

const Default = ({ children }) => {

    const classes = useStyles()

    return (
        <>
            <Header /> 
            <Container maxWidth="md" className={classes.content}>
                {children}
            </Container>
        </>
    )
}

export default Default