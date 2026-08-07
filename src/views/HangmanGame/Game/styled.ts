import styled from 'styled-components';

export const Container = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
`;

export const IncorrectGuesses = styled.p`
  width: 100%;
  margin: 0;
  padding: 6px 14px;
  border-top: 2px solid #171717;
  border-bottom: 2px solid #171717;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  text-transform: lowercase;
`;
