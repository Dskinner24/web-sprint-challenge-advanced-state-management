import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/actions';
import SmurfCard from '../components/SmurfCard';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurf()
    }, [])

    return(
        <div>
            {props.smurfs.map(smurf => (<SmurfCard smurf={smurf}/>))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurf})(SmurfList)