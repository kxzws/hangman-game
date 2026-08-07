import styled from 'styled-components';

export const Container = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
`;

export const ModeGroup = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 1rem;
  font-weight: 500;
`;

export const WordField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
`;

export const WordInput = styled.input`
  width: 100%;
  padding: 9px 10px;
  font-size: 1rem;
  line-height: 1.25;
  border: 1px solid #000;
`;

export const ErrorMessage = styled.p`
  min-height: 18px;
  margin: 0;
  color: #c00;
  font-size: 0.875rem;
  line-height: 18px;
`;

export const StartBtn = styled.button`
  min-height: 40px;
  padding: 0 22px;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 0;
  transition: all 0.25s ease-in;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`;
