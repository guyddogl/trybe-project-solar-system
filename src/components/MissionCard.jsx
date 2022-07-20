import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="col-6 col-md-3 mb-4 text-start">
        <div className="card shadow-sm">
          <div data-testid="mission-card" className="card-body">
            <p data-testid="mission-name" className="card-title mb-3">
              <i className="fa-solid fa-rocket fa-xl icon-color me-2" />
              { name }
            </p>
            <hr />
            <p data-testid="mission-year" className="card-p p-2">
              <i className="fa-solid fa-calendar me-2" />
              { year }
            </p>
            <p data-testid="mission-country" className="card-p p-2">
              <i className="fa-solid fa-location-dot me-2" />
              { country }
            </p>
            <p data-testid="mission-destination" className="card-p p-2">
              <i className="fa-solid fa-earth-asia me-2" />
              { destination }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
