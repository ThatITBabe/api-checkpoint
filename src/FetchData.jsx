import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const FetchData = () => {

    //creating state to store the resources collected
    const[users, setUsers] = useState([])

    //storing API URL in a variable

    //useEffect is used to fetch data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")//use fetch api to fetch data
        .then(res => res.json())//after fetching, then change format using .json()
        .then(data => setUsers(data))//then we update the state of users
        .catch(err => console.log(err))//catch err and log to the console
    }, [])
  return (
    <div>
        <ul>
            {users.map((u, index) => (
                <li key={index}>
                    {u.name}
                </li>
            ))}
        </ul>
    </div>

  )
}

export default FetchData






