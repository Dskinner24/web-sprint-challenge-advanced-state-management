import React from 'react';

const SmurfCard = (props) => {
    return(
        <div className='smurfs'>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
        </div>
    )
}

export default SmurfCard