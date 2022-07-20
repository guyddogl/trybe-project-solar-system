import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planetsData from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
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
