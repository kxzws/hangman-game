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

export const StatusMessage = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
`;

export const NewGameButton = styled.button`
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
`;
