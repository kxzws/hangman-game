import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.45);
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: min(100%, 360px);
  padding: 24px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
`;

export const BackButton = styled.button`
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
`;
