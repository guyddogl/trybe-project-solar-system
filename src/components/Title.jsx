import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: '',
};

export default Title;
