import styled from 'styled-components';

import { COLORS, handDrawnButton } from '../shared';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(23, 23, 23, 0.62);
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 380px;
  padding: 42px;
  border: 2px solid ${COLORS.ink};
  border-radius: 47% 53% 49% 51% / 5% 4% 6% 5%;
  background: ${COLORS.paper};
  color: ${COLORS.ink};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: min(380px, 100%);
    padding: 36px;
  }

  @media (max-width: 320px) {
    padding: 28px;
  }
`;

export const ResultMessage = styled.p`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin: 0;

  span {
    font-size: 1rem;
  }
`;

export const ResultStatus = styled.span`
  font-size: 2.25rem;
  line-height: 1.05;
`;

export const ResultWord = styled.span`
  font-family: 'Courier New', monospace;
  font-weight: 400;
`;

export const BackButton = styled.button`
  ${handDrawnButton}

  padding: 0 18px;
  font-size: 1rem;
`;
