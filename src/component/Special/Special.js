import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    const ornaments = useContext(RingContext);
    return (
        <div>
            <h2>{ornaments}</h2>
        </div>
    );
};

export default Special;