import styled, { keyframes } from 'styled-components';

import { COLORS, handDrawnButton } from '../../components/styled';

const revealWordField = keyframes`
  from {
    opacity: 0;
    transform: translateX(-16px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media (max-width: 768px) {
    width: min(360px, 100%);
  }

  @media (max-width: 320px) {
    row-gap: 20px;
  }
`;

export const StartIllustration = styled.div`
  width: 128px;

  svg {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 112px;
  }
`;

export const ModeGroup = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  input {
    appearance: none;
    width: 24px;
    height: 24px;
    margin: 0;
    border: 2px solid ${COLORS.ink};
    border-radius: 48% 52% 45% 55%;
    background: ${COLORS.paper};

    &:checked {
      border: 6px solid ${COLORS.ink};
    }
  }
`;

export const WordField = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  animation: ${revealWordField} 220ms ease-out both;
`;

export const WordInput = styled.input`
  width: 100%;
  padding: 11px 12px;
  font-size: 1rem;
  line-height: 1.25;
  border: 2px solid ${COLORS.ink};
  border-radius: 49% 51% 48% 52% / 12% 10% 14% 12%;
  background: ${COLORS.paper};
  color: ${COLORS.ink};
  transition:
    border-color 180ms ease,
    transform 180ms ease;

  &:focus {
    border-color: #171717;
    transform: translateY(-1px);
  }
`;

export const ErrorMessage = styled.p`
  min-height: 18px;
  margin: 0;
  color: #4c4c4c;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
`;

export const StartBtn = styled.button`
  ${handDrawnButton}

  padding: 0 26px;
  font-size: 1rem;
`;
