// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setDogs(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading</p>;

    return(
        <img src={dogs.message} alt="A Random Dog"></img>
    )
}

export default App