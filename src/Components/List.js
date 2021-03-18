import React from 'react';
import {useState, useEffect} from 'react';
import Estate from './Estate';

const List = () => {
    const [items, setItems] = useState([]);
    const [id, setId] = useState(null);
   

    // fetching data 
    async function fetchData() { 
        const response = await fetch(`https://estate-comparison.codeboot.cz/list.php`);
        const data = await response.json();
        setItems(data);
    }
    
    //returning 
    const estates = items.slice(0, 10);

    useEffect(() => { 
        fetchData(); 
    }, []);

    function handleClick(e) { 
        setId(e.currentTarget.id);
        console.log(id);
    }

    // map through the slice data which will display the actually page
    return (
        <div className='result'>
            <div className='list'>
    
                {/* Mapping through estate arrays */}
                {estates.map(estate => { 
                    return( 
                            <div key={estate.id} id={estate.id} className='post' onClick={handleClick}>
                                <img src={estate.images[0]} alt="view of estate"/>
                                <p>{estate.name}</p>
                            </div>
                    )
                })}
    
                {/* Will return estate id when you click */}
    
            </div>
        </div>
    )
}

export default List;