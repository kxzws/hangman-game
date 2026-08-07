import styled from 'styled-components';

export const AppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 56px 24px;

  @media (max-width: 1024px) {
    padding: 24px 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 320px) {
    padding: 18px 16px 24px;
  }
`;
