import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'; 


const useStyles = makeStyles(() => ({
    content: {
        padding: '15px 0',
    }
}))

const Clean = ({ Component }) => {

    const classes = useStyles()

    return (
        <>
            <Container maxWidth="md" className={classes.content}>
                <Component />
            </Container>
        </>
    )
}

export default Clean