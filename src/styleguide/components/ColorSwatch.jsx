import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Color from 'color';

const StyledSwatch = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

const StyledSwatchTitle = styled.span`
  background-color: #FFF;
  color: #333;
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 5px;
  padding: 8px;
`;

const StyledSwatchSubtitle = styled(StyledSwatchTitle)`
  font-size: 10px;
`;

export const ColorSwatch = ({ height, name, value }) => {
  const swatchStyles = {
    backgroundColor: value,
    height,
  };

  const rgbValue = Color(value).rgb().string();

  return (
    <StyledSwatch style={swatchStyles}>
      <StyledSwatchTitle>{name}</StyledSwatchTitle>
      <br />
      <StyledSwatchSubtitle>{value}</StyledSwatchSubtitle>
      <br />
      <StyledSwatchSubtitle>{rgbValue}</StyledSwatchSubtitle>
    </StyledSwatch>
  );
};

ColorSwatch.propTypes = {
  height: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

ColorSwatch.defaultProps = {
  height: '160px',
};
