import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/actions';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const inputHandler = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }


    return (
        <div className='smurf'>
            <form>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    label='name'
                    placeHolder='Enter Name Here'
                    value={props.name}
                    onChange={inputHandler}
                />

                <label htmlFor='age'>Age</label>
                <input
                    type='text'
                    name='age'
                    label='age'
                    placeHolder='Enter Age Here'
                    value={props.age}
                    onChange={inputHandler}
                />

                <label htmlFor='height'>Height</label>
                <input
                    type='text'
                    name='height'
                    label='height'
                    placeHolder='Enter Height Here'
                    value={props.height}
                    onChange={inputHandler}
                />
                <button onClick={submitHandler}>Add Smurf to Village</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)