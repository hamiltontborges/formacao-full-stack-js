import { Typography } from '@material-ui/core';


const Page = ({ title, Component }) => {

    return (
        <>
            <Typography variant="h3" component="h1" gutterBottom>
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default Page