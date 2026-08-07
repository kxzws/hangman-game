import styled from 'styled-components';

export const Container = styled.div`
  width: min(460px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;

  @media (max-width: 768px) {
    row-gap: 16px;
  }

  @media (max-width: 320px) {
    row-gap: 12px;
  }
`;

export const IncorrectGuessesGroup = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (max-width: 320px) {
    margin: 6px 0;
  }
`;

export const WobblyLine = styled.svg`
  display: block;
  width: 100%;
  height: 8px;
  fill: none;
  pointer-events: none;
  stroke: #171717;
  stroke-linecap: round;
  stroke-width: 2;
`;

export const IncorrectGuesses = styled.p`
  width: 100%;
  margin: 0;
  padding: 0 14px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  text-transform: lowercase;

  @media (max-width: 320px) {
    font-size: 0.875rem;
  }
`;
