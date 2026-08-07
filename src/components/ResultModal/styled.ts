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
  padding: 30px;
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
`;

export const BackButton = styled.button`
  min-height: 44px;
  padding: 0 18px;
  border: 2px solid #171717;
  border-radius: 48% 52% 45% 55% / 16% 12% 18% 14%;
  background: #fff;
  color: #171717;
  font-size: 1rem;
  font-weight: 700;

  &:hover {
    background: #171717;
    color: #fff;
  }
`;
