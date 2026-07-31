import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: min(100%, 460px);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

export const IncorrectGuesses = styled.p`
  width: 100%;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
`;
