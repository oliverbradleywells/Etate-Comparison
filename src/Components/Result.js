import React from 'react';
import { useState, useEffect } from 'react';

const Result = () => {
    const [estate1, setEstate1] = useState(null);
    const [estate2, setEstate2] = useState(null);
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    async function fetch1() {
        const response = await fetch(`https://estate-comparison.codeboot.cz/detail.php?id=1701473884`)
        const data = await response.json();
        setEstate1(data);
        setIsLoading1(false);
    }

    useEffect(() => {
        fetch1();
    }, [])

    console.log(estate1);

    async function fetch2() {
        const response = await fetch(`https://estate-comparison.codeboot.cz/detail.php?id=2769235548`)
        const data = await response.json();
        setEstate2(data);
        setIsLoading2(false);
    }

    useEffect(() => {
        fetch2();
    }, [])

    console.log(estate2);

    return (
        <div className='comparison'>

            {isLoading1 ?
                'loading now' :
                <div className='post'>
                    <img src={estate1.images[0]} alt='view of estate' />
                    <div className='post__text'>
                        <div>
                            <p>{estate1.name}</p>
                        </div>
                        <div className='estate1__price'>
                            <p>Price</p>
                            <p>{estate1.prize_czk} CZK</p>
                        </div>
                        <div>
                            <p>Locality</p>
                            <p>{estate1.locality}</p>
                        </div>
                        <div className='estate1__floor-area'>
                            <p>Floor Area</p>
                            <p>{estate1.building_area} m^2</p>
                        </div>
                        <div className='estate1__land-area'>
                            <p>Land Area</p>
                            <p>{estate1.land_area} m^2</p>
                        </div>
                    </div>
                </div>}

            {isLoading2 ?
                'loading now' :
                <div className='post'>
                    <img src={estate2.images[0]} alt='view of estate' />
                    <div className='post__text'>
                        <div>
                            <p>{estate2.name}</p>
                        </div>
                        <div className='estate2__price'>
                            <p>Price</p>
                            <p>{estate2.prize_czk} CZK</p>
                        </div>
                        <div>
                            <p>Locality</p>
                            <p>{estate2.locality}</p>
                        </div>
                        <div className='estate2__floor-area'>
                            <p>Floor Area</p>
                            <p>{estate2.building_area} m^2</p>
                        </div>
                        <div className='estate2__land-area'>
                            <p>Land Area</p>
                            <p>{estate2.land_area} m^2</p>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default Result;