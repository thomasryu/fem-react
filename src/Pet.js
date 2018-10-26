import React from 'react';
import { Link } from '@reach/router';

class Pet extends React.Component {
    render() {
        const { name, animal, breed, media, location, id } = this.props;

        let photos = [];
        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(
                photo => photo['@size'] === 'pn' // We only want one of the photo sizes
            );
        }

        /*
            A Reach Route link
            The 'to' attribute defines the route which clicking the the element
            will redirect the user to (again, 'id' is obtained from props, the pet's)
        */
        return (
            <Link to={`/details/${id}`} className="pet">
                <div className="image-container">
                    <img alt={'photo of' + name} src={photos[0].value} />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>
                        {animal} - {breed} - {location}
                    </h2>
                </div>
            </Link>
        );
    }
}

export default Pet;
