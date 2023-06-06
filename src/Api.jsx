import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./api.css"

const Api = () => {
    const [photos, setPhotos] = useState([])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/photos")
    //     .then(response => response.json())
    //     .then(response => setPhotos(response))
    //     .catch(error => console.log(error))
    // }, [])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => setPhotos(response.data))
        .catch(error => console.log(error))
    }, [])
  return (
    <div className='photos'>
        {
            photos.map((photos, i) => (
                <div className="card shadow" style={{width: "18rem"}} key={i}>
                    <img src={photos.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.title}</h5>
                        <p className="card-text">{photos.id}</p>
                        <a href="/" className="btn btn-secondary">Add to Cart</a>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default Api