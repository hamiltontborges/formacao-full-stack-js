import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'; 

import Header from "../partials/Header/Header"
import useAuth from '../state/auth';

const useStyles = makeStyles(() => ({
    content: {
        padding: '15px 0',
    }
}))

const Default = ({ children }) => {

    const classes = useStyles()

    const { user } = useAuth()

    return (
        <>
            <Header user={user}/> 
            <Container maxWidth="md" className={classes.content}>
                {children}
            </Container>
        </>
    )
}

export default Default