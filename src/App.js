import React from 'react';
import { render } from 'react-dom'; // will only pull the 'render' function from ReactDOM
import { Router, Link } from '@reach/router'; // with the magics of Parcel, this will automatically appear for us

import Results from './Results';
import Details from './Details';

class App extends React.Component {
    render() {
        /* 
            You surround the components you want to route with <Router> 
            The 'path' attribute defines which component is loaded on which route
            (e.g. Results will be the base route)

            ':id' is a what's called a variable parameter
            if we go to '/details/1', 'id: 1' will be passed as a prop to the Detail component
        */
        return (
            <div>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Router>
                    <Results path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
