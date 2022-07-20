import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planetsData from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        data-testid="solar-system"
        className="row text-center align-items-center justify-content-center my-5"
      >
        <Title headline="Planetas" />
        {planetsData.map((planet, index) => (
          <PlanetCard
            key={ index + planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
