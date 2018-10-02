/*
// Sample of a React component
const App = () => {
return React.createElement("div", {}, // Parent (element, attributes, children)
React.createElement("h1", {}, 'Adopt Me!') // Child
);
}

// Function component
const App = () => {
return React.createElement("div", {}, [
React.createElement("h1", {}, 'Adopt Me!'),
React.createElement(Pet, {
name: "Luna",
animal: "dog",
breed: "Havanese"
}),
React.createElement(Pet, {
name: "Pepper",
animal: "bird",
breed: "Cockatiel"
}),
React.createElement(Pet, {
name: "Doink",
animal: "cat",
breed: "Siamese"
})
]);
}
*/

import React from 'react';
import { render } from 'react-dom'; // will only pull the 'render' function from ReactDOM
import Pet from './Pet';

// Class component
class App extends React.Component {
    handleTitleClick() {
        alert('You clicked the title');
    }

    render() {
        /* return React.createElement('div', {}, [
            React.createElement(
                'h1',
                { onClick: this.handleTitleClick }, // 'this' refers to the App instance
                'Adopt Me!'
            ),
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'dog',
                breed: 'Havanese'
            }),
            React.createElement(Pet, {
                name: 'Pepper',
                animal: 'bird',
                breed: 'Cockatiel'
            }),
            React.createElement(Pet, {
                name: 'Doink',
                animal: 'cat',
                breed: 'Siamese'
            })
        ]); */

        return (
            <div>
                <h1>Adopt Me!</h1>
                <Pet name="Luna" animal="dog" breed="Havanese" />
                <Pet name="Pepper" animal="bird" breed="Cockatiel" />
                <Pet name="Doink" animal="cat" breed="Siamese" />
            </div>
        );
    }
}

// React.createElement(App) is equivalent to React.createElement(App, {}, null)
// The arguments of render() are (component, render location)
// App is a class. Here, createElement() creates an instance of the class

// render(React.createElement(App), document.getElementById('root'));   without JSX
render(<App />, document.getElementById('root'));
