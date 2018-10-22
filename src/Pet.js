import React from 'react';

/* 
// Function component
const Pet = props => {

    // no JSX
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);

    // with JSX
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    ); // parenthesis allows us to continue the code in the following line(s)
};
*/

class Pet extends React.Component {
    render() {
        // Destructuring, basically the paremeters required from
        // the parent for this component to work
        const { name, animal, breed, media, location } = this.props;

        let photos = [];
        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(
                photo => photo['@size'] === 'pn' // We only want one of the photo sizes
            );
        }

        return (
            <div className="pet">
                <div className="image-container">
                    <img alt={'photo of' + name} src={photos[0].value} />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {location}
                    </h2>
                </div>
            </div>
        );
    }
}

export default Pet;
