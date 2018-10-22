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
import pf from 'petfinder-client';
import Pet from './Pet';

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

// Class component
class App extends React.Component {
    // First thing called when the component is created
    constructor(props) {
        super(props); // Calls React.Component's constructor, passing props to it (obligatory)

        this.state = {
            pets: [] // Defines the default/initial state of the component
        };
    }

    // Called when the component's initial render is finished
    componentDidMount() {
        /* 
        const promise = petfinder.breed.list({ animal: 'dog' }); // Simple promise usage
        promise.then(console.log, console.error);
        */

        petfinder.pet
            .find({ output: 'full', location: 'Seattle, WA' }) // Pet available for adoption in Seattle
            .then(data => {
                let pets;

                // Simple verifications so pets is always an Array
                if (data.petfinder.pets && data.petfinder.pets.pet) {
                    if (Array.isArray(data.petfinder.pets.pet)) {
                        pets = data.petfinder.pets.pet;
                    } else {
                        pets = [data.petfinder.pets.pet];
                    }
                } else {
                    pets = [];
                }

                /*
                this.state.pets = pets; // This does not work, React has to know when pets' value change
                */

                // For the setState object, we pass an object of things to update, so we only define as 'updated'
                // things that were truly changed/updated, leaving all the other state values untouched
                this.setState({
                    pets // same as 'pets: pets' (first pet being state's pet and the second, the let's)
                });
            });
    }

    render() {
        /* 
        handleTitleClick() {
            alert('You clicked the title');
        }
        
        return React.createElement('div', {}, [
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
        ]);
        */

        /*
        return ( 
            <pre>
                <code>{JSON.stringify(this.state, null, 4)}</code> // Print the current state's contents
            </pre>

            <h1>Adopt Me!</h1>

            <Pet name="Luna" animal="dog" breed="Havanese" />
            <Pet name="Pepper" animal="bird" breed="Cockatiel" /> // Not using API/state to show pets
            <Pet name="Doink" animal="cat" breed="Siamese" />
        );
        */

        return (
            <div>
                <h1>Adopt Me!</h1>

                <div>
                    {this.state.pets.map(pet => {
                        let breed;

                        if (Array.isArray(pet.breeds.breed)) {
                            breed = pet.breeds.breed.join(', '); // Pets can have multiple breeds
                        } else {
                            breed = pet.breeds.breed;
                        }

                        return (
                            <Pet
                                key={pet.id}
                                animal={pet.animal}
                                name={pet.name}
                                breed={breed}
                                media={pet.media}
                                location={`${pet.contact.city}, ${pet.contact.state}`}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

// React.createElement(App) is equivalent to React.createElement(App, {}, null)
// The arguments of render() are (component, render location)
// App is a class. Here, createElement() creates an instance of the class

// render(React.createElement(App), document.getElementById('root'));   without JSX
render(<App />, document.getElementById('root'));
