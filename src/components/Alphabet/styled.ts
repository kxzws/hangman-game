import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Key = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;
