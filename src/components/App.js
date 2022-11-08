import React, { useState, useEffect } from "react";

function App() {

    const [dogs, setDogs] = useState([])
    const [loadDogs, setLoadDogs] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((dog) => {
            setDogs(dog);
            setLoadDogs(true);
        });    
    }, []);

    if (!loadDogs) return <p>Loading...</p>
    return (
        <>
            <div>
                <img src={dogs.message} alt="A Random Dog"/>
            </div>
        </>
    )
}

export default App;