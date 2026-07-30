import styled from 'styled-components';

export const Container = styled.form`
  margin: 0 auto;
  padding: 20px 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const WordInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #000;
`;

export const ErrorMessage = styled.p`
  margin: -12px 0 0;
  color: #c00;
`;

export const StartBtn = styled.button`
  padding: 8px 22px;
  font-size: 1.2rem;
  border: 1px solid #000;
  border-radius: 10px;
  transition: all 0.25s ease-in;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`;
