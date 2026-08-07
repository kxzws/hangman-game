import styled, { keyframes } from 'styled-components';

const revealWordField = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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
    border: 2px solid #171717;
    border-radius: 48% 52% 45% 55%;
    background: #fff;

    &:checked {
      border: 6px solid #171717;
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
  border: 2px solid #171717;
  border-radius: 49% 51% 48% 52% / 12% 10% 14% 12%;
  background: #fff;
  color: #171717;
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
  min-height: 44px;
  padding: 0 26px;
  font-size: 1rem;
  font-weight: 700;
  border: 2px solid #171717;
  border-radius: 47% 53% 46% 54% / 18% 14% 20% 16%;
  background: #fff;
  color: #171717;
  border-radius: 48% 52% 49% 51% / 50% 47% 53% 50%;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  &:hover {
    color: #fff;
    background-color: #171717;
    transform: translateY(-2px) rotate(-0.5deg);
  }

  &:active {
    transform: translateY(1px);
  }
`;
