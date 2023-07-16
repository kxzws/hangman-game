import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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

export const StartBtn = styled(Link)`
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
