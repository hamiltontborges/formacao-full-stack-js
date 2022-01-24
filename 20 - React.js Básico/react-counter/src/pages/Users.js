import React, { useState, useEffect } from 'react'

import Loading from '../components/Loading'

const Users = () => {

    const [users, setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <Loading visible={isLoading} />

            {
                users.map(user => {
                    return (
                        <div>
                            <p><b>{user.name}</b> - email: {user.email} - phone: {user.phone}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users
