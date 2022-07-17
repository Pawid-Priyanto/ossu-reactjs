import React from 'react';

const Hello = (props) => {
    return(
        <div>
            <p>Hello {props.name} your age is {props.age} years old</p>
        </div>
    )
}

export default Hello;