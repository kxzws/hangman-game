import styled from 'styled-components';

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
  border: 2px solid #171717;
  border-radius: 47% 53% 49% 51% / 5% 4% 6% 5%;
  background: #fff;
  color: #171717;
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
  min-height: 44px;
  padding: 0 18px;
  border: 2px solid #171717;
  background: #fff;
  color: #171717;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 48% 52% 49% 51% / 50% 47% 53% 50%;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  &:hover {
    background: #171717;
    color: #fff;
    transform: translateY(-2px) rotate(-0.5deg);
  }

  &:active {
    transform: translateY(1px);
  }
`;
