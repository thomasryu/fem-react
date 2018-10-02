import React from 'react';

// Function component
const Pet = props => {
    // no JSX
    /* return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]); */

    // with JSX
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    ); // parenthesis allows us to continue the code in the following line(s)
};

export default Pet;
