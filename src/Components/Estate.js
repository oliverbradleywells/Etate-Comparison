  
import React from 'react';
import {useState, useEffect} from 'react';


const Estate = (props) => {
    const [estate, setEstate] = useState(null);

    const url = `https://estate-comparison.codeboot.cz/detail.php?id=${props.id}`;
    // one estate is fetch

    async function fetchData() { 
        const response = await fetch(url);
        const data = await response.json();
        setEstate(data);
    }

    useEffect(() => { 
        fetchData();
    }, [])

    return (
        <div className='estate'>
            <p>{props.id}</p>
        </div>
    )
}

export default Estate;