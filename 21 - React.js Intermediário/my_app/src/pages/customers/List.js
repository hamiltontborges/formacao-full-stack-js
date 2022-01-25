import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core'

import CustomerCard from '../../components/CustomerCard';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: theme.spacing(2),
    },
}));


const List = () => {
    const classes = useStyles();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data;

                setCustomers(data);
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
                
                const newCustomerState = customers.filter(customer => customer.id !== id)

                setCustomers(newCustomerState)
            })
    }

    return (
        <Grid container>
            {
                customers.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CustomerCard
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                            onRemoveCustomer={handleRemoveCustomer}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default List;
