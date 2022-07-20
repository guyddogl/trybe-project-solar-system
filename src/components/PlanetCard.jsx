import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    let size = '1';
    if (planetName === 'Júpiter' || planetName === 'Saturno') size = '2';
    return (
      <div
        data-testid="planet-card"
        className={ `col-4 col-md-${size} align-self-center text-center` }
      >
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `img-fluid mx-auto d-block ${planetName}` }
        />
        <p data-testid="planet-name" className="planetName">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
