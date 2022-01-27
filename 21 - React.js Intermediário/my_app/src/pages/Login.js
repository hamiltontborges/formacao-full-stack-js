import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Typography } from '@material-ui/core'

import useAuth from '../state/auth'


const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))


const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    console.log(user)

    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {

            setUser({
                logged: true,
                email: form.email
            })

            history.push('/')
        }, 4000)
    }

    return (
        <>
            <Typography variant="h3">Acesso Restrito</Typography>

            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    variant="outlined"
                    label="Digite seu email"
                    name="email"
                />
            </div>

            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    variant="outlined"
                    label="Digite sua senha"
                    type="password"
                    name="password"
                />
            </div>

            <div className={classes.wrapper}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleFormSubmit}
                >
                    {
                        isLoading ? "Aguarde..." : "Entrar"
                    }
                </Button>
            </div>

        </>
    )
}

export default Login