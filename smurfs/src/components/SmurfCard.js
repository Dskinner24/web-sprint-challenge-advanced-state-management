import React from 'react';

const SmurfCard = (props) => {
    return(
        <div>
            <h2>{props.smurfs.name}</h2>
            <h3>{props.smurfs.age}</h3>
            <h3>{props.smurfs.height}</h3>
        </div>
    )
}

export default SmurfCard