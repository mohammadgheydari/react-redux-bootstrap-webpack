import React from 'react';

function Counter(props) {
    return (
        <div>
            <h1>I am a Counter!</h1>
            <p>Count: {props.count} </p>
            <button className="btn btn-primary">Increment</button>
        </div>
    )
}

export default Counter;