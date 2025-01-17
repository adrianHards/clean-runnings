import React from 'react';
import styled from 'styled-components';
import { resultInfo } from '../utils/resultInfo';
import { COLORS } from '../styles/colors';

const LEVELS = {
  good: COLORS.good,
  moderate: COLORS.moderate,
  'unhealthy for sensitive groups': COLORS.sensitive,
  unhealthy: COLORS.unhealthy,
  'very unhealthy': COLORS.veryUnhealthy,
  hazardous: COLORS.hazardous,
};

const ResultWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 7px 8px 2px 1px rgba(0, 0, 255, 0.2);
`;

const CircleOut = styled.div`
  background-color: white;
  border-radius: 100%;
  width: 50px;
  height: 50%;
`;

const Circle = styled.div`
  background-color: ${props => props.color}78;
  border: 2px solid ${props => props.color};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Level = styled.p`
  text-align: center;
  font-weight: 900;
  margin-right: 20px;
  font-family: 'Nunito', Sans-serif;
  font-size: 15px;
  max-width: 100px;
`;

const Detail = styled.p`
  width: 300px;
  font-family: 'Inconsolata', Sans-serif;
  font-size: 15px;
`;

export const Result = ({ aqi, category}) => {
  return (
    <ResultWrapper>
      <CircleOut>
        <Circle color={LEVELS[category.toLowerCase()]}>
          <p>{aqi}</p>
        </Circle>
      </CircleOut>
      <Level>{category.toUpperCase()}</Level>
      <Detail>{resultInfo[category.toLowerCase()]}</Detail>
    </ResultWrapper>
  );
};
