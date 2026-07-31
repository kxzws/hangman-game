import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  gap: 8px;
  width: min(100%, 420px);
`;

export const Key = styled.button`
  min-height: 40px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;
